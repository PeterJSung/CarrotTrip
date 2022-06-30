import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { CombinedSignupData, SignUpDisplayData, SignupInfo1Data } from 'vo/signup';
import * as actions from './actions';

export type SignupOnboardAction = ActionType<typeof actions>;

const getDefaultData = (): SignUpDisplayData => ({
    buttonText: '',
    isEnabled: false,
});

export type SignupOnboardState = SyncState<{
    signupInfo1: CombinedSignupData<SignupInfo1Data | undefined>;
    signupInfo2: CombinedSignupData<any>;
    signupInfo3: CombinedSignupData<any>;
    signupInfo4: CombinedSignupData<any>;
    signupInfo5: CombinedSignupData<any>;
    signupInfo6: CombinedSignupData<any>;
}>;

const initialState: SignupOnboardState = {
    data: {
        signupInfo1: { disp: getDefaultData(), userInfo: undefined },
        signupInfo2: { disp: getDefaultData(), userInfo: undefined },
        signupInfo3: { disp: getDefaultData(), userInfo: undefined },
        signupInfo4: { disp: getDefaultData(), userInfo: undefined },
        signupInfo5: { disp: getDefaultData(), userInfo: undefined },
        signupInfo6: { disp: getDefaultData(), userInfo: undefined },
    },
};

const github = createReducer<SignupOnboardState, SignupOnboardAction>(initialState, {
    [actions.SignUpInfoActions.UPDATE_INFO1]: (state, action) =>
        produce(state, (draft) => {
            draft.data.signupInfo1 = action.payload;
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
    [actions.SignUpInfoActions.UPDATE_INFO6]: (state, action) =>
        produce(state, (draft) => {
            draft.data.signupInfo6 = action.payload;
        }),
});

export default github;
