import { updateEvaluationAttract, updateEvaluationScoreNComment } from 'api/evaluationAreaUpdate';
import { postSignup } from 'api/signup';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { signinUser } from 'redux/userInfo';
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

export const signupSeqence = (): ThunkAction<void, RootState, null, SignupOnboardAction> => {
    return async (dispatch, getState) => {
        const idInfo = getState().signupInfo.data.signupInfo1;
        const mbtiInfo = getState().signupInfo.data.signupInfo5;
        if (idInfo.userInfo === undefined || mbtiInfo.userInfo === undefined) {
            console.log(`Error signup failed cause no require ment data`);
            return;
        }

        const signupResult = await postSignup({
            mbti: mbtiInfo.userInfo,
            nickname: idInfo.userInfo.nickName,
            password: idInfo.userInfo.pw,
        });
        await dispatch(signinUser(signupResult.nickname, signupResult.mbti));
        // signup 과정 및 세션 lockin 완료.
        const allPromiseArr: Array<Promise<any>> = [];
        console.log(getState().signupInfo.data.signupInfo2);
        getState().signupInfo.data.signupInfo2.userInfo.forEach((d) => {
            allPromiseArr.push(updateEvaluationScoreNComment(signupResult.nickname, d.id, d.score));
            d.attraction.length > 0 &&
                allPromiseArr.push(updateEvaluationAttract(signupResult.nickname, d.id, d.attraction));
        });
        const res = await Promise.allSettled(allPromiseArr);
        console.log(res);
    };
};
