import produce from 'immer';
import { cloneDeep } from 'lodash';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { UpdateReviewVO } from 'vo/review';
import * as actions from './actions';

export type ReviewInfoAction = ActionType<typeof actions>;

export type ReviewInfoState = SyncState<UpdateReviewVO | undefined>;

const initialState: ReviewInfoState = {
    data: undefined,
};

export const generateReducer = (firstState: ReviewInfoState = initialState) => {
    return createReducer<ReviewInfoState, ReviewInfoAction>(firstState, {
        [actions.ReviewActions.UPDATE_REVIEWDATA]: (state, action) =>
            produce(state, (draft) => {
                draft.data = cloneDeep(action.payload);
            }),
    });
};

export default generateReducer();
