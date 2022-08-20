import { updateEvaluationScoreNComment } from 'api/evaluationAreaUpdate';
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

export const registerReviewThunk = (
    name: string,
    comment: string,
    score: number,
    apiId: number,
): ThunkAction<void, RootState, null, ReviewInfoAction> => {
    return async (dispatch) => {
        await updateEvaluationScoreNComment(name, apiId, score, comment);
    };
};
