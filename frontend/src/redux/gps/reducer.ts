import { ActionType, createReducer } from 'typesafe-actions';
import { SyncState } from 'redux/common';
import { GpsActions } from './actions';
import * as actions from './actions';
import { produce } from 'immer';
import { Gps } from 'vo/gps';

export type GpsAction = ActionType<typeof actions>;

export type GpsState = SyncState<Gps | null>;

const initialState: GpsState = {
    data: null,
};

const github = createReducer<GpsState, GpsAction>(initialState, {
    [GpsActions.GPS_UPDATE]: (state) =>
        produce(state, (draft) => {
            draft.data = state.data;
        }),
});

export default github;
