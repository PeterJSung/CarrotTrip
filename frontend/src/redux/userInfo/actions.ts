import { createAction } from 'typesafe-actions';
import { SigninInSignupInfo } from 'vo/signup';

export enum UserInfoActions {
    UPDATE_USERINFO = 'USERINFO/UPDATE_USERINFO',
    UPDATE_FAILED_USERINFO = 'USERINFO/UPDATE_FAILED_USERINFO',
}

export const signinAction = createAction(UserInfoActions.UPDATE_USERINFO)<SigninInSignupInfo>();
export const signinFailedAction = createAction(UserInfoActions.UPDATE_FAILED_USERINFO)<string>();
