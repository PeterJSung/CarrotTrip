import { retriveTourareaAPI } from 'api/tourlistInfo';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { MyLocationGps, NaviPoint } from 'vo/gps';
import { getTourlistAreaAction } from './actions';
import { TourlistAreaAction } from './reducer';

export const retriveTourlistArea = (
    myLocationInfo: MyLocationGps,
    name: string,
    locale: string,
): ThunkAction<void, RootState, null, TourlistAreaAction> => {
    return async (dispatch, getState) => {
        const res = await retriveTourareaAPI(myLocationInfo.lng, myLocationInfo.lat, name, locale);
        const myPos: NaviPoint = {
            y: myLocationInfo.lat,
            x: myLocationInfo.lng,
        };

        const recommand = res.response.body.items.recommendCourseItem;
        const total = res.response.body.items.item;
        await dispatch(
            getTourlistAreaAction({
                myLocationInfo,
                recommand,
                total,
            }),
        );
    };
};
