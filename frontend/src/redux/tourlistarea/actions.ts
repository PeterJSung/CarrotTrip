import { createAction } from 'typesafe-actions';
import { KakaoNaviAPIRes, NaviPoint } from 'vo/gps';
import { TourlistInfo } from 'vo/travelInfo';

export enum TourlistAreaActions {
    UPDATE_AREA = 'TOURLISTAREA/UPDATE_AREA',
    UPDATE_MBTIDATA = 'TOURLISTAREA/UPDATE_MBTIDATA',
    UPDATE_TASTEDATA = 'TOURLISTAREA/UPDATE_TASTEDATA',
}

export const getTourlistAreaAction = createAction(TourlistAreaActions.UPDATE_AREA)<{
    name: string;
    loadTime: number;
    navigationResult: KakaoNaviAPIRes;
    naviPoints: NaviPoint[];
    total: TourlistInfo[];
}>();

export const getMbtiDataUpdate = createAction(TourlistAreaActions.UPDATE_MBTIDATA)<{
    mbti: string;
}>();

export const getTasteDataUpdate = createAction(TourlistAreaActions.UPDATE_TASTEDATA)<{
    tasteList: number[];
}>();
