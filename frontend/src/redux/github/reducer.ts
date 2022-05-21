import { ActionType, createReducer } from 'typesafe-actions';
import { AsyncState, getInitialAsyncState } from '@/redux/common'
import { GithubProfileActions } from './actions';
import { GithubProfile } from '@/api/github';
import * as actions from './actions';
import { produce } from 'immer';

export type GithubAction = ActionType<typeof actions>;

export type GithubProfileState = AsyncState<GithubProfile | null>

const initialState: GithubProfileState = {
  asyncInfo: getInitialAsyncState(),
  data: null
};

const github = createReducer<GithubProfileState, GithubAction>(initialState, {
  [GithubProfileActions.GET_USER_PROFILE]: (state)=>
  produce(state,draft => {
    draft.asyncInfo.error = null
    draft.asyncInfo.loading = true
  }),
  [GithubProfileActions.GET_USER_PROFILE_SUCCESS]: (state, action) =>
  produce(state,draft => {
    draft.asyncInfo.loading = false
    draft.asyncInfo.loaded = true
    draft.data = action.payload;
  }),
  [GithubProfileActions.GET_USER_PROFILE_ERROR]: (state, action) =>
  produce(state,draft => {
    draft.asyncInfo.loading = false
    draft.asyncInfo.loaded = false
    draft.asyncInfo.error = action.payload
  })
});

export default github;
