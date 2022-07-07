import { produce } from 'immer';
import { AsyncState, getInitialAsyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { GithubProfile } from 'vo/github';
import * as actions from './actions';
import { GithubProfileActions } from './actions';

export type GithubAction = ActionType<typeof actions>;

export type GithubProfileState = AsyncState<GithubProfile | null>;

const initialState: GithubProfileState = {
    asyncInfo: getInitialAsyncState(),
    data: null,
};

const reducers = createReducer<GithubProfileState, GithubAction>(initialState, {
    [GithubProfileActions.GET_USER_PROFILE]: (state) =>
        produce(state, (draft) => {
            draft.asyncInfo.error = null;
            draft.asyncInfo.loading = true;
        }),
    [GithubProfileActions.GET_USER_PROFILE_SUCCESS]: (state, action) =>
        produce(state, (draft) => {
            draft.asyncInfo.loading = false;
            draft.asyncInfo.loaded = true;
            draft.data = action.payload;
        }),
    [GithubProfileActions.GET_USER_PROFILE_ERROR]: (state, action) =>
        produce(state, (draft) => {
            draft.asyncInfo.loading = false;
            draft.asyncInfo.loaded = false;
            draft.asyncInfo.error = action.payload;
        }),
});

export default reducers;
