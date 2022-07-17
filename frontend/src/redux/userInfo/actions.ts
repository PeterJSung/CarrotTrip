import { createAction } from 'typesafe-actions';
import { SigninInfo } from 'vo/signup';

export enum UserInfoActions {
    UPDATE_USERINFO = 'USERINFO/UPDATE_USERINFO',
}

export const signinAction = createAction(UserInfoActions.UPDATE_USERINFO)<SigninInfo>();
