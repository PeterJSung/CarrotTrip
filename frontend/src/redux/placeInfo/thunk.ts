import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { TotalPlaceInfo } from 'vo/placeInfo';
import { placeInfoUpdateAction } from './actions';
import { PlaceInfoAction } from './reducer';

export const updatePlaceInfoInfo = (data: TotalPlaceInfo): ThunkAction<void, RootState, null, PlaceInfoAction> => {
    return async (dispatch) => {
        await dispatch(
            placeInfoUpdateAction({
                data,
            }),
        );
    };
};
