import { postSignin } from 'api/signin';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { signinAction, signinFailedAction } from './actions';
import { UserInfoAction } from './reducer';

export const signinThunk = (name: string, pw: string): ThunkAction<void, RootState, null, UserInfoAction> => {
    return async (dispatch) => {
        try {
            const loginResult = await postSignin({
                nickname: name,
                password: pw,
            });
            await dispatch(
                sessionInThunk(
                    loginResult.nickname,
                    loginResult.tasteList.map((d) => Number(d.tasteCode)),
                    loginResult.mbti,
                ),
            );
        } catch (e: any) {
            await dispatch(signinFailedAction('signin.failed'));
        }
    };
};

export const sessionInThunk = (
    name: string,
    tasteCodes: number[],
    mbti?: string,
): ThunkAction<void, RootState, null, UserInfoAction> => {
    return async (dispatch) => {
        await dispatch(
            signinAction({
                mbti,
                name,
                tasteCodes,
                isLogin: true,
            }),
        );
    };
};

export const sessionOutThunk = (): ThunkAction<void, RootState, null, UserInfoAction> => {
    return async (dispatch) => {
        await dispatch(
            signinAction({
                mbti: '',
                name: '',
                tasteCodes: [],
                isLogin: false,
            }),
        );
    };
};
