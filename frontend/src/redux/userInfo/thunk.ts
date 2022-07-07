import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { userInfoUpdateAction } from './actions';
import { UserInfoAction } from './reducer';

export const updateUserInfo = (data: boolean): ThunkAction<void, RootState, null, UserInfoAction> => {
    return async (dispatch) => {
        await dispatch(userInfoUpdateAction(data));
    };
};
