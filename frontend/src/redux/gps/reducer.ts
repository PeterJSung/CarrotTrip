import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_MAP_LEVEL } from 'common/constants';
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
        temporaryMove: {
            lat: DEFAULT_LAT,
            lng: DEFAULT_LNG,
            zoom: DEFAULT_MAP_LEVEL,
        },
    },
};

export const generateReducer = (firstState: GpsState = initialState) => {
    return createReducer<GpsState, GpsAction>(firstState, {
        [GpsActions.CURRENT_GPS_UPDATE]: (state, action) =>
            produce(state, (draft) => {
                draft.data.current = action.payload;
            }),
        [GpsActions.TEMPORARY_GPS_UPDATE]: (state, action) =>
            produce(state, (draft) => {
                draft.data.highlight = action.payload;
            }),
        [GpsActions.HIGHLIGHT_GPS_UPDATE]: (state, action) =>
            produce(state, (draft) => {
                draft.data.highlight = action.payload;
            }),
    });
};

export default generateReducer();
