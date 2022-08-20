import { produce } from 'immer';
import { ActionType, createReducer } from 'typesafe-actions';
import { SessionInterface } from 'vo/signin';
import * as actions from './actions';

export type UserInfoAction = ActionType<typeof actions>;

export type UserInfoState = SessionInterface;

const initialState: UserInfoState = {
    data: {
        tasteCodes: [],
        isLogin: false,
        name: '',
    },
};

export const generateReducer = (firstState: UserInfoState = initialState) => {
    return createReducer<UserInfoState, UserInfoAction>(firstState, {
        [actions.UserInfoActions.UPDATE_USERINFO]: (state, action) =>
            produce(state, (draft) => {
                draft.data = action.payload;
            }),
        [actions.UserInfoActions.UPDATE_FAILED_USERINFO]: (state, action) =>
            produce(state, (draft) => {
                draft.data = {
                    tasteCodes: [],
                    errMsg: action.payload,
                    isLogin: false,
                    name: '',
                };
            }),
    });
};

export default generateReducer();
