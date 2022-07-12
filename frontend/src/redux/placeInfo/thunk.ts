import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { PlaceBasicInformation, PlaceDetailInformation, WritedReviewInfo } from 'vo/placeInfo';
import { placeInfoUpdateAction, reviewUpdateAction } from './actions';
import { PlaceInfoAction } from './reducer';

export const updatePlaceInfoInfo = (
    basicInfo: PlaceBasicInformation,
    detailInfo: PlaceDetailInformation,
): ThunkAction<void, RootState, null, PlaceInfoAction> => {
    return async (dispatch) => {
        await dispatch(
            placeInfoUpdateAction({
                basicInfo,
                detailInfo,
            }),
        );
    };
};

export const updateReviewInfoInfo = (
    reviewInfo: WritedReviewInfo,
): ThunkAction<void, RootState, null, PlaceInfoAction> => {
    return async (dispatch) => {
        await dispatch(
            reviewUpdateAction({
                reviewInfo,
            }),
        );
    };
};
