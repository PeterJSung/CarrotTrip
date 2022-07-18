import { createAction } from 'typesafe-actions';
import { LocationInfo, MyLocationGps } from 'vo/gps';

export enum GpsActions {
    CURRENT_GPS_UPDATE = 'GPS/CURRENT_GPS_UPDATE',
    TEMPORARY_GPS_UPDATE = 'GPS/TEMPORARY_GPS_UPDATE',
    HIGHLIGHT_GPS_UPDATE = 'GPS/HIGHLIGHT_GPS_UPDATE',
}

export const currentGpsUpdate = createAction(GpsActions.CURRENT_GPS_UPDATE)<MyLocationGps>();
export const temporaryGpsUpdate = createAction(GpsActions.TEMPORARY_GPS_UPDATE)<LocationInfo>();
export const hightlightGpsUpdate = createAction(GpsActions.HIGHLIGHT_GPS_UPDATE)<LocationInfo | undefined>();
