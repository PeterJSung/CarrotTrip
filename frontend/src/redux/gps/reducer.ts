import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';
import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { Gps } from 'vo/gps';
import * as actions from './actions';
import { GpsActions } from './actions';

export type GpsAction = ActionType<typeof actions>;

export type GpsState = SyncState<Gps>;

const initialState: GpsState = {
    data: {
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG,
        regionStr: '',
    },
};

export const generateReducer = (firstState: GpsState = initialState) => {
    return createReducer<GpsState, GpsAction>(firstState, {
        [GpsActions.GPS_UPDATE]: (state, action) =>
            produce(state, (draft) => {
                draft.data = action.payload;
            }),
    });
};

export default generateReducer();
