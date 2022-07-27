import { createAction } from 'typesafe-actions';
import { PlaceBookMarkListAPIRes } from 'vo/placeInfo';

export enum BookMarkInfoActions {
    GET_BOOKMARK = 'BOOKMARKINFO/GET_BOOKMARK',
    UPDATE_BOOKMARK = 'BOOKMARKINFO/UPDATE_BOOKMARK',
}

type BOOKMARK_HANDLE = 'CREATE' | 'DELETE';

export const getBookMarkAction = createAction(BookMarkInfoActions.GET_BOOKMARK)<PlaceBookMarkListAPIRes[]>();
export const updateBookMarkAction = createAction(BookMarkInfoActions.UPDATE_BOOKMARK)<{
    type: BOOKMARK_HANDLE;
    apiId: number;
    name: string;
}>();
