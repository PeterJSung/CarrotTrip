import { createAction } from 'typesafe-actions';
import { MyLocationGps } from 'vo/gps';
import { TourlistInfo } from 'vo/travelInfo';

export enum TourlistAreaActions {
    UPDATE_AREA = 'TOURLISTAREA/UPDATE_AREA',
}

export const getTourlistAreaAction = createAction(TourlistAreaActions.UPDATE_AREA)<{
    myLocationInfo: MyLocationGps;
    recommand: TourlistInfo[];
    total: TourlistInfo[];
}>();
