import { createAction } from 'typesafe-actions';

export enum SignoutSessionActions {
    SIGNOUT = 'SIGNOUTSESSIONACTION/SIGNOUT',
    DELETE_USER = 'SIGNOUTSESSIONACTION/DELETE_USER',
}

export const signoutAction = createAction(SignoutSessionActions.SIGNOUT)();
export const deleteUserAction = createAction(SignoutSessionActions.DELETE_USER)();
