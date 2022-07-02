import { createAction } from 'typesafe-actions';
import { CombinedSignupData, SignupInfo1Data } from 'vo/signup';

export enum SignUpInfoActions {
    UPDATE_INFO1 = 'SIGNUPINFO/UPDATE_INFO1',
    UPDATE_INFO2 = 'SIGNUPINFO/UPDATE_INFO2',
    UPDATE_INFO3 = 'SIGNUPINFO/UPDATE_INFO3',
    UPDATE_INFO4 = 'SIGNUPINFO/UPDATE_INFO4',
    UPDATE_INFO5 = 'SIGNUPINFO/UPDATE_INFO5',
}

export const signupInfo1UpdateAction = createAction(SignUpInfoActions.UPDATE_INFO1)<
    CombinedSignupData<SignupInfo1Data>
>();
export const signupInfo2UpdateAction = createAction(SignUpInfoActions.UPDATE_INFO2)<CombinedSignupData<any>>();
export const signupInfo3UpdateAction = createAction(SignUpInfoActions.UPDATE_INFO3)<CombinedSignupData<number[]>>();
export const signupInfo4UpdateAction = createAction(SignUpInfoActions.UPDATE_INFO4)<CombinedSignupData<number[]>>();
export const signupInfo5UpdateAction = createAction(SignUpInfoActions.UPDATE_INFO5)<CombinedSignupData<string>>();
