import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

export type UpdateLoaderAction = ActionType<typeof actions>;

export type GlobalLoaderState = SyncState<{
    isLoading: boolean;
}>;

const initialState: GlobalLoaderState = {
    data: {
        isLoading: false,
    },
};

export const generateReducer = (firstState: GlobalLoaderState = initialState) => {
    return createReducer<GlobalLoaderState, UpdateLoaderAction>(firstState, {
        [actions.GlobalLoaderActions.UPDATE_LOADER]: (state, action) =>
            produce(state, (draft) => {
                draft.data.isLoading = action.payload;
            }),
    });
};

export default generateReducer();
