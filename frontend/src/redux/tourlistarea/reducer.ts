import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { TourlistDataset } from 'vo/travelInfo';
import * as actions from './actions';

export type TourlistAreaAction = ActionType<typeof actions>;

export type TourlistAreaState = SyncState<{
    recommand: TourlistDataset[];
    item: { [key: string]: TourlistDataset };
}>;

const initialState: TourlistAreaState = {
    data: {
        recommand: [],
        item: {},
    },
};

export const generateReducer = (firstState: TourlistAreaState = initialState) => {
    return createReducer<TourlistAreaState, TourlistAreaAction>(firstState, {
        [actions.TourlistAreaActions.UPDATE_AREA]: (state, action) =>
            produce(state, (draft) => {
                draft.data = action.payload;
            }),
    });
};

export default generateReducer();
