import { createAction } from 'typesafe-actions';
import { KakaoNaviAPIRes, MyLocationGps, NaviPoint } from 'vo/gps';
import { TourlistInfo } from 'vo/travelInfo';

export enum TourlistAreaActions {
    UPDATE_AREA = 'TOURLISTAREA/UPDATE_AREA',
}

export const getTourlistAreaAction = createAction(TourlistAreaActions.UPDATE_AREA)<{
    myLocationInfo: MyLocationGps;
    name: string;
    mbti?: string;
    navigationResult: KakaoNaviAPIRes;
    naviPoints: NaviPoint[];
    total: TourlistInfo[];
}>();
