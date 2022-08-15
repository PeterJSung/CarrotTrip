import { produce } from 'immer';
import { cloneDeep } from 'lodash';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { TotalPlaceInfo } from 'vo/placeInfo';
import * as actions from './actions';

export type PlaceInfoAction = ActionType<typeof actions>;

export type PlaceInfoState = SyncState<{
    detailInfo: TotalPlaceInfo;
}>;

const initialState: PlaceInfoState = {
    data: {
        detailInfo: {
            placename: '',
            placeType: '',
            adress: '',
            description: '',
            mbtiArr: [],
            moodArr: [],
            reviewArr: [],
        },
    },
};

export const generateReducer = (firstState: PlaceInfoState = initialState) => {
    return createReducer<PlaceInfoState, PlaceInfoAction>(firstState, {
        [actions.PlaceInfoActions.UPDATE_PLACEINFO]: (state, action) =>
            produce(state, (draft) => {
                draft.data.detailInfo = cloneDeep(action.payload.data);
            }),
    });
};

export default generateReducer();
