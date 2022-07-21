import { retriveTourareaAPI } from 'api/tourlistInfo';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { getTourlistAreaAction } from './actions';
import { TourlistAreaAction } from './reducer';

export const retriveTourlistArea = (
    lng: number,
    lat: number,
    name: string,
    locale: string,
): ThunkAction<void, RootState, null, TourlistAreaAction> => {
    return async (dispatch) => {
        const res = await retriveTourareaAPI(lng, lat, name, locale);
        const recommand = res.response.body.items.recommendCourseItem;
        const total = res.response.body.items.item;
        await dispatch(
            getTourlistAreaAction({
                recommand,
                total,
            }),
        );
    };
};
