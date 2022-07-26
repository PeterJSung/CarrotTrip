import { createAction } from 'typesafe-actions';
import { MyLocationGps } from 'vo/gps';

export enum GpsActions {
    CURRENT_GPS_UPDATE = 'GPS/CURRENT_GPS_UPDATE',
}

export const currentGpsUpdate = createAction(GpsActions.CURRENT_GPS_UPDATE)<MyLocationGps>();
