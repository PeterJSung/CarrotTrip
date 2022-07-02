import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { CombinedSignupData, SignupInfo1Data } from 'vo/signup';
import {
    signupInfo1UpdateAction,
    signupInfo2UpdateAction,
    signupInfo3UpdateAction,
    signupInfo4UpdateAction,
    signupInfo5UpdateAction,
} from './actions';
import { SignupOnboardAction } from './reducer';

export const updateInfo1 = (
    data: CombinedSignupData<SignupInfo1Data>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        await dispatch(signupInfo1UpdateAction(data));
    };
};

export const updateInfo2 = (data: CombinedSignupData<any>): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        await dispatch(signupInfo2UpdateAction(data));
    };
};

export const updateInfo3 = (
    data: CombinedSignupData<number[]>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        await dispatch(signupInfo3UpdateAction(data));
    };
};

export const updateInfo4 = (
    data: CombinedSignupData<number[]>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        await dispatch(signupInfo4UpdateAction(data));
    };
};

export const updateInfo5 = (
    data: CombinedSignupData<string>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        await dispatch(signupInfo5UpdateAction(data));
    };
};
