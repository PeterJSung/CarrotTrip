import { retriveTourareaAPI } from 'api/tourlistInfo';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { TourlistAreaAction } from './reducer';

export const retriveTourlistArea = (
    lng: number,
    lat: number,
    name: string,
    locale: string,
): ThunkAction<void, RootState, null, TourlistAreaAction> => {
    return async (dispatch) => {
        const res = await retriveTourareaAPI(lng, lat, name, locale);
        const recommandData = res.response.body.items.recommendCourseItem;
        const totalData = res.response.body.items.item;
        console.log(recommandData);
        console.log(totalData);
    };
};
