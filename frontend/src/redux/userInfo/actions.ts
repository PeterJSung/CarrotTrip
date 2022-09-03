import { createAction } from 'typesafe-actions';
import { SigninInSignupInfo } from 'vo/signup';

export enum UserInfoActions {
    UPDATE_USERINFO = 'USERINFO/UPDATE_USERINFO',
    UPDATE_MBTI = 'USERINFO/UPDATE_MBTI',
    UPDATE_TASTE = 'USERINFO/UPDATE_TASTE',
    UPDATE_FAILED_USERINFO = 'USERINFO/UPDATE_FAILED_USERINFO',
}

export const signinAction = createAction(UserInfoActions.UPDATE_USERINFO)<SigninInSignupInfo>();
export const signinMBTIAction = createAction(UserInfoActions.UPDATE_MBTI)<string>();
export const signinTastAction = createAction(UserInfoActions.UPDATE_TASTE)<number[]>();
export const signinFailedAction = createAction(UserInfoActions.UPDATE_FAILED_USERINFO)<string>();
