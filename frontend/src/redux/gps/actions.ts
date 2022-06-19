import { createAction } from 'typesafe-actions';
import { Gps } from 'vo/gps';

export enum GpsActions {
    GPS_UPDATE = 'GPS/GPS_UPDATE',
}

export const gpsUpdate = createAction(GpsActions.GPS_UPDATE)<Gps>();