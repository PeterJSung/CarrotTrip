import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
type ActinoTypes = ActionType<typeof actions>;
export const signoutThunk = (): ThunkAction<void, RootState, null, ActinoTypes> => {
    return async (dispatch) => {
        await dispatch(actions.signoutAction());
    };
};

export const deleteUserThunk = (): ThunkAction<void, RootState, null, ActinoTypes> => {
    return async (dispatch) => {
        await dispatch(actions.deleteUserAction());
    };
};
