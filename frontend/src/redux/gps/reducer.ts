import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { DEFAULT_GPS, GpsInformation } from 'vo/gps';
import * as actions from './actions';
import { GpsActions } from './actions';

export type GpsAction = ActionType<typeof actions>;

export type GpsState = SyncState<GpsInformation>;

const initialState: GpsState = {
    data: {
        current: DEFAULT_GPS,
    },
};

export const generateReducer = (firstState: GpsState = initialState) => {
    return createReducer<GpsState, GpsAction>(firstState, {
        [GpsActions.CURRENT_GPS_UPDATE]: (state, action) =>
            produce(state, (draft) => {
                draft.data.current = action.payload;
            }),
    });
};

export default generateReducer();
