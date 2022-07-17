import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { signinAction } from './actions';
import { UserInfoAction } from './reducer';

export const signinUser = (name: string, mbti?: string): ThunkAction<void, RootState, null, UserInfoAction> => {
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

export const signoutUser = (): ThunkAction<void, RootState, null, UserInfoAction> => {
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
