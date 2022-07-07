import { createAction } from 'typesafe-actions';

export enum UserInfoActions {
    UPDATE_USERINFO = 'USERINFO/UPDATE_USERINFO',
}

export const userInfoUpdateAction = createAction(UserInfoActions.UPDATE_USERINFO)<any>();
