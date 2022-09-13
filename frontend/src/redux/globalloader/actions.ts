import { createAction } from 'typesafe-actions';

export enum GlobalLoaderActions {
    UPDATE_LOADER = 'GLOBAL_LOADER/UPDATE_LOADER',
}

export const updateLoaderAction = createAction(GlobalLoaderActions.UPDATE_LOADER)<boolean>();
