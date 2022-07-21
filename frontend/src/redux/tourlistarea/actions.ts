import { createAction } from 'typesafe-actions';
import { TourlistInfo } from 'vo/travelInfo';

export enum TourlistAreaActions {
    UPDATE_AREA = 'TOURLISTAREA/UPDATE_AREA',
}

export const getTourlistAreaAction = createAction(TourlistAreaActions.UPDATE_AREA)<{
    recommand: TourlistInfo[];
    total: TourlistInfo[];
}>();
