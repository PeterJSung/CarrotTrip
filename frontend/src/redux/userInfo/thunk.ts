import { postSignin } from 'api/signin';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { signinAction, signinFailedAction } from './actions';
import { UserInfoAction } from './reducer';

export const signinThunk = (name: string, pw: string): ThunkAction<void, RootState, null, UserInfoAction> => {
    return async (dispatch) => {
        const loginResult = await postSignin({
            nickname: name,
            password: pw,
        });
        if (typeof loginResult === 'string') {
            await dispatch(signinFailedAction(loginResult));
        } else {
            await dispatch(sessionInThunk(loginResult.nickname, loginResult.mbti));
        }
    };
};

export const sessionInThunk = (name: string, mbti?: string): ThunkAction<void, RootState, null, UserInfoAction> => {
    return async (dispatch) => {
        await dispatch(
            signinAction({
                mbti,
                name,
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
                isLogin: true,
            }),
        );
    };
};
