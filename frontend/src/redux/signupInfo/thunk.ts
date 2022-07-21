import { updateEvaluationAttract, updateEvaluationScoreNComment } from 'api/evaluationAreaUpdate';
import { postRegistUserAttraction, postSignup } from 'api/signup';
import { cloneDeep } from 'lodash';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { sessionInThunk } from 'redux/userInfo';
import { CombinedSignupData, SignupInfo1Data, SignupInfo2Data, TourAreaInfo } from 'vo/signup';
import {
    signupInfo1UpdateAction,
    signupInfo2BannerUpdateAction,
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
        data.isSkip = false;
        await dispatch(signupInfo1UpdateAction(data));
    };
};

export const updateInfo2Banner = (
    id: number,
    data: TourAreaInfo,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        await dispatch(signupInfo2BannerUpdateAction({ id, data }));
    };
};

export const updateInfo2 = (
    data: CombinedSignupData<SignupInfo2Data[]>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        data.isSkip = false;
        await dispatch(signupInfo2UpdateAction(data));
    };
};

export const updateInfo3 = (
    data: CombinedSignupData<number[]>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        data.isSkip = false;
        await dispatch(signupInfo3UpdateAction(data));
    };
};

export const updateInfo4 = (
    data: CombinedSignupData<number[]>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        data.isSkip = false;
        await dispatch(signupInfo4UpdateAction(data));
    };
};

export const updateInfo5 = (
    data: CombinedSignupData<string>,
): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch) => {
        data.isSkip = false;
        await dispatch(signupInfo5UpdateAction(data));
    };
};

export const resetInfoFromSkip = (target: number): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch, getState) => {
        let targetAction;
        let tagetDraft;
        if (target === 1) {
            tagetDraft = cloneDeep(getState().signupInfo.data.signupInfo2);
            targetAction = signupInfo2UpdateAction;
            await dispatch(
                signupInfo2UpdateAction({
                    disp: { ...getState().signupInfo.data.signupInfo2.disp },
                    userInfo: [],
                }),
            );
        } else if (target === 3) {
            tagetDraft = cloneDeep(getState().signupInfo.data.signupInfo5);
            targetAction = signupInfo5UpdateAction;
        }

        if (targetAction && tagetDraft) {
            tagetDraft.isSkip = true;
            await dispatch(targetAction(tagetDraft as any));
        }
    };
};

export const signupSeqence = (): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch, getState) => {
        const idInfo = getState().signupInfo.data.signupInfo1;
        const attractionInfo = getState().signupInfo.data.signupInfo4;
        const mbtiInfo = getState().signupInfo.data.signupInfo5;
        if (idInfo.userInfo === undefined || mbtiInfo.userInfo === undefined || attractionInfo.userInfo === undefined) {
            console.error(`Error signup failed cause no require ment data`);
            return;
        }

        const signupResult = await postSignup({
            mbti: mbtiInfo.isSkip ? undefined : mbtiInfo.userInfo,
            nickname: idInfo.userInfo.nickName,
            password: idInfo.userInfo.pw,
        });
        await dispatch(sessionInThunk(signupResult.nickname, signupResult.mbti));
        // signup 과정 및 세션 lockin 완료.
        const allPromiseArr: Array<Promise<any>> = [];
        allPromiseArr.push(
            postRegistUserAttraction({
                memberNickname: signupResult.nickname,
                categoryCodes: attractionInfo.userInfo ?? [],
            }),
        );

        const signupInfo2 = getState().signupInfo.data.signupInfo2;

        !signupInfo2.isSkip &&
            signupInfo2.userInfo.forEach((d) => {
                allPromiseArr.push(updateEvaluationScoreNComment(signupResult.nickname, d.id, d.score));
                d.attraction.length > 0 &&
                    allPromiseArr.push(updateEvaluationAttract(signupResult.nickname, d.id, d.attraction));
            });
        await Promise.allSettled(allPromiseArr);
    };
};
