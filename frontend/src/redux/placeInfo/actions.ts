import { createAction } from 'typesafe-actions';
import { PlaceBasicInformation, PlaceDetailInformation, WritedReviewInfo } from 'vo/placeInfo';

export enum PlaceInfoActions {
    UPDATE_PLACEINFO = 'PLACEINFO/UPDATE_PLACEINFO',
    UPDATE_REVIEWINFO = 'PLACEINFO/UPDATE_REVIEWINFO',
}

export const placeInfoUpdateAction = createAction(PlaceInfoActions.UPDATE_PLACEINFO)<{
    basicInfo: PlaceBasicInformation;
    detailInfo: PlaceDetailInformation;
}>();

export const reviewUpdateAction = createAction(PlaceInfoActions.UPDATE_REVIEWINFO)<{
    reviewInfo: WritedReviewInfo;
}>();
