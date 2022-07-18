import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { SigninInSignupInfo } from 'vo/signup';
import * as actions from './actions';

export type UserInfoAction = ActionType<typeof actions>;

export type UserInfoState = SyncState<SigninInSignupInfo>;

const initialState: UserInfoState = {
    data: {
        isLogin: false,
        name: '',
        mbti: '',
    },
};

export const generateReducer = (firstState: UserInfoState = initialState) => {
    return createReducer<UserInfoState, UserInfoAction>(firstState, {
        [actions.UserInfoActions.UPDATE_USERINFO]: (state, action) =>
            produce(state, (draft) => {
                draft.data = action.payload;
            }),
    });
};

export default generateReducer();
