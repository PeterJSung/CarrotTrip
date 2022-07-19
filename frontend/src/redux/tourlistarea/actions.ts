import { createAction } from 'typesafe-actions';

export enum TourlistAreaActions {
    UPDATE_AREA = 'TOURLISTAREA/UPDATE_AREA',
}

export const getTourlistAreaAction = createAction(TourlistAreaActions.UPDATE_AREA)<any>();
