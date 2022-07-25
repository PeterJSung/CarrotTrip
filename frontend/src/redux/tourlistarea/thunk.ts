import { getTourNaviInfo } from 'api/navigation';
import { retriveTourareaAPI } from 'api/tourlistInfo';
import { calculateLatLngDistance } from 'common/util';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { KakaoNaviAPIRes, MyLocationGps, NaviPoint } from 'vo/gps';
import { getTourlistAreaAction } from './actions';
import { TourlistAreaAction } from './reducer';

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

export const retriveTourlistArea = (
    myLocationInfo: MyLocationGps,
    name: string,
    locale: string,
    mbti?: string,
): ThunkAction<void, RootState, null, TourlistAreaAction> => {
    return async (dispatch) => {
        const res = await retriveTourareaAPI(myLocationInfo.lng, myLocationInfo.lat, name, locale);
        const myPos: NaviPoint = {
            y: myLocationInfo.lat,
            x: myLocationInfo.lng,
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
                myLocationInfo,
                name,
                mbti,
                naviPoints: orderedRoute,
                navigationResult,
                total,
            }),
        );
    };
};
