import { getTourNaviInfo } from 'api/navigation';
import { retriveTourareaAPI } from 'api/tourlistInfo';
import { calculateLatLngDistance } from 'common/util';
import { ThunkAction } from 'redux-thunk';
import { updateLoaderAction } from 'redux/globalloader';
import { RootState } from 'redux/rootReducer';
import { KakaoNaviAPIRes, NaviPoint } from 'vo/gps';
import { SigninInSignupInfo } from 'vo/signup';
import { getMbtiDataUpdate, getTasteDataUpdate, getTourlistAreaAction } from './actions';

const orderingDistanceRoutingPath = (currentGps: NaviPoint, routeInfo: NaviPoint[]): NaviPoint[] => {
    const totalCount = routeInfo.length;
    const checker: Array<boolean> = Array.from(Array(totalCount).fill(false));
    const ret: NaviPoint[] = [];
    let currentY = currentGps.y;
    let currentX = currentGps.x;

    for (let i = 0; i < totalCount; i++) {
        let idx = -1;
        let minDistance = 10000000;
        for (let y = 0; y < totalCount; y++) {
            const currentDistance = calculateLatLngDistance(currentY, currentX, routeInfo[y].y, routeInfo[y].x);
            if (!checker[y] && minDistance > currentDistance) {
                minDistance = currentDistance;
                idx = y;
            }
        }
        if (idx !== -1) {
            checker[idx] = true;
            currentY = routeInfo[idx].y;
            currentX = routeInfo[idx].x;
            ret.push({
                name: routeInfo[idx].name,
                y: currentY,
                x: currentX,
            });
        }
    }
    return ret;
};

const DEBOUNCE_CALL = 1000 * 60 * 60;

export const retriveTourlistArea = (
    lat: number,
    lng: number,
    userInfo: SigninInSignupInfo,
    locale: string,
    force?: boolean,
): ThunkAction<void, RootState, null, any> => {
    return async (dispatch, getState) => {
        const time = getState().tourlistArea.data.loadTime;
        const currentTime = Date.now();

        if (currentTime < time + DEBOUNCE_CALL && !force) {
            return;
        }

        dispatch(updateLoaderAction(true));

        const res = await retriveTourareaAPI(lng, lat, userInfo.name, locale);
        const myPos: NaviPoint = {
            y: lat,
            x: lng,
        };
        const recommand = res.response.body.items.recommendCourseItem;
        const total = res.response.body.items.item;

        const routes: NaviPoint[] = [];
        recommand.forEach((eachD) => {
            routes.push({
                name: `${eachD.contentid}`,
                y: eachD.mapy,
                x: eachD.mapx,
            });
        });
        const orderedRoute = orderingDistanceRoutingPath(myPos, routes);
        const navigationResult: KakaoNaviAPIRes = await getTourNaviInfo(myPos, orderedRoute);

        await dispatch(
            getTourlistAreaAction({
                loadTime: currentTime,
                name: userInfo.name,
                naviPoints: orderedRoute,
                navigationResult,
                total,
            }),
        );
        userInfo.mbti &&
            dispatch(
                getMbtiDataUpdate({
                    mbti: userInfo.mbti,
                }),
            );
        dispatch(
            getTasteDataUpdate({
                tasteList: userInfo.tasteCodes,
            }),
        );
        dispatch(updateLoaderAction(false));
    };
};
