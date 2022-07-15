import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { MapInteractionStackType } from 'vo/mapInteraction';
import * as actions from './actions';

export type MapDispStackAction = ActionType<typeof actions>;

export type MapInteractionStackState = SyncState<MapInteractionStackType>;

const initialState: MapInteractionStackState = {
    data: [],
};

export const generateReducer = (firstState: MapInteractionStackState = initialState) => {
    return createReducer<MapInteractionStackState, MapDispStackAction>(firstState, {
        [actions.MapDispActions.UPDATE_STACK]: (state, action) =>
            produce(state, (draft) => {
                draft.data = [...action.payload];
            }),
    });
};

export default generateReducer();
