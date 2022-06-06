import { CountActions } from './actions';
import * as actions from './actions';
import { ActionType, createReducer } from 'typesafe-actions';
import { produce } from 'immer';

export type CounterActionType = ActionType<typeof actions>;

export interface CounterState {
    count: number;
}

// 초기상태를 선언합니다.
const initialState: CounterState = {
    count: 0,
};

const counter = createReducer<CounterState, CounterActionType>(initialState, {
    [CountActions.INC_COUNT]: (state: CounterState) =>
        produce(state, (draft) => {
            draft.count++;
        }),
    [CountActions.DEC_COUNT]: (state: CounterState) =>
        produce(state, (draft) => {
            draft.count--;
        }),
    [CountActions.SET_COUNT]: (state: CounterState, action) =>
        produce(state, (draft) => {
            draft.count += action.payload;
        }),
});

export default counter;
