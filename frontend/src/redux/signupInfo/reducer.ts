import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { CombinedSignupData, SignupBanner2Data, SignUpDisplayData, SignupInfo1Data, SignupInfo2Data } from 'vo/signup';
import * as actions from './actions';

export type SignupOnboardAction = ActionType<typeof actions>;

export const getDefaultSignupInfoDisp = (): SignUpDisplayData => ({
    buttonText: '',
    isDisable: false,
});

export type SignupOnboardState = SyncState<{
    signupInfo1: CombinedSignupData<SignupInfo1Data | undefined>;
    signupInfo2: CombinedSignupData<SignupInfo2Data[]>;
    signupInfo2Banner: SignupBanner2Data;
    signupInfo3: CombinedSignupData<number[] | undefined>;
    signupInfo4: CombinedSignupData<number[] | undefined>;
    signupInfo5: CombinedSignupData<string | undefined>;
}>;

const initialState: SignupOnboardState = {
    data: {
        signupInfo1: { disp: getDefaultSignupInfoDisp(), userInfo: undefined },
        signupInfo2: { disp: getDefaultSignupInfoDisp(), userInfo: [] },
        signupInfo2Banner: {},
        signupInfo3: { disp: getDefaultSignupInfoDisp(), userInfo: undefined },
        signupInfo4: { disp: getDefaultSignupInfoDisp(), userInfo: undefined },
        signupInfo5: { disp: getDefaultSignupInfoDisp(), userInfo: undefined },
    },
};

export const generateReducer = (firstState: SignupOnboardState = initialState) => {
    return createReducer<SignupOnboardState, SignupOnboardAction>(firstState, {
        [actions.SignUpInfoActions.UPDATE_INFO1]: (state, action) =>
            produce(state, (draft) => {
                draft.data.signupInfo1 = action.payload;
            }),
        [actions.SignUpInfoActions.UPDATE_BANNER_INFO2]: (state, action) =>
            produce(state, (draft) => {
                draft.data.signupInfo2Banner[action.payload.id] = action.payload.data;
                if (draft.data.signupInfo2Banner[action.payload.id].score === 0) {
                    delete draft.data.signupInfo2Banner[action.payload.id];
                }
            }),
        [actions.SignUpInfoActions.UPDATE_INFO2]: (state, action) =>
            produce(state, (draft) => {
                draft.data.signupInfo2 = action.payload;
            }),
        [actions.SignUpInfoActions.UPDATE_INFO3]: (state, action) =>
            produce(state, (draft) => {
                draft.data.signupInfo3 = action.payload;
            }),
        [actions.SignUpInfoActions.UPDATE_INFO4]: (state, action) =>
            produce(state, (draft) => {
                draft.data.signupInfo4 = action.payload;
            }),
        [actions.SignUpInfoActions.UPDATE_INFO5]: (state, action) =>
            produce(state, (draft) => {
                draft.data.signupInfo5 = action.payload;
            }),
    });
};

export default generateReducer();
