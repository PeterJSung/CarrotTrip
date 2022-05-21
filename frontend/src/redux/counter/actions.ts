import { createAction } from 'typesafe-actions'
//createAction
export enum CountActions {
    INC_COUNT = 'counter/INC_COUNT',
    DEC_COUNT = 'counter/DEC_COUNT',
    SET_COUNT = 'counter/SET_COUNT'
}

export const increase = createAction(CountActions.INC_COUNT)();
export const decrease = createAction(CountActions.DEC_COUNT)();
export const setCount = createAction(CountActions.SET_COUNT)<number>(); 
