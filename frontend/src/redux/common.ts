import { useDispatch } from 'react-redux';
import { ThunkAction, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export interface AsyncInfo {
    loading: boolean;
    loaded: boolean;
    error: Error | null;
}

export const getInitialAsyncState = (): AsyncInfo => ({
    loading: false,
    loaded: false,
    error: null,
});

export const useThunk = <T extends any[]>(
    thunkFunction: (...args: T) => ThunkAction<void, RootState, null, AnyAction>,
) => {
    const dispatch: AppDispatch = useDispatch();

    return async (...args: T) => {
        await dispatch(thunkFunction(...args));
    };
};

export interface AsyncState<T> {
    asyncInfo: AsyncInfo;
    data: T;
}

export interface SyncState<T> {
    data: T;
}
