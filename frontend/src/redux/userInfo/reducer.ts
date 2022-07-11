import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

export type UserInfoAction = ActionType<typeof actions>;

export type UserInfoState = SyncState<{
    isLogin: boolean;
    userId: string;
    userName: string;
}>;

const initialState: UserInfoState = {
    data: {
        isLogin: false,
        userId: '',
        userName: '',
    },
};

const reducers = createReducer<UserInfoState, UserInfoAction>(initialState, {
    [actions.UserInfoActions.UPDATE_USERINFO]: (state, action) =>
        produce(state, (draft) => {
            draft.data = action.payload;
        }),
});

export default reducers;
