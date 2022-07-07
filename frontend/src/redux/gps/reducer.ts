import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { Gps } from 'vo/gps';
import * as actions from './actions';
import { GpsActions } from './actions';

export type GpsAction = ActionType<typeof actions>;

export type GpsState = SyncState<Gps | undefined>;

const initialState: GpsState = {
    data: undefined,
};

const reducers = createReducer<GpsState, GpsAction>(initialState, {
    [GpsActions.GPS_UPDATE]: (state, action) =>
        produce(state, (draft) => {
            draft.data = action.payload;
        }),
});

export default reducers;
