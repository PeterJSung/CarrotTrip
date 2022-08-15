import { createAction } from 'typesafe-actions';
import { TotalPlaceInfo } from 'vo/placeInfo';

export enum PlaceInfoActions {
    UPDATE_PLACEINFO = 'PLACEINFO/UPDATE_PLACEINFO',
}

export const placeInfoUpdateAction = createAction(PlaceInfoActions.UPDATE_PLACEINFO)<{
    data: TotalPlaceInfo;
}>();
