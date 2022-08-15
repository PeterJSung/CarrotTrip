import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { UpdateReviewVO } from 'vo/review';
import { updateReviewInfoAction } from './actions';
import { ReviewInfoAction } from './reducer';

export const updateReviewThunk = (data: UpdateReviewVO): ThunkAction<void, RootState, null, ReviewInfoAction> => {
    return async (dispatch) => {
        await dispatch(updateReviewInfoAction(data));
    };
};
