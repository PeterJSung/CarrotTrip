import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "./rootReducer";

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>; 

export interface AsyncInfo {
    loading: boolean;
    loaded: boolean;
    error: Error | null;
}

export const getInitialAsyncState = (): AsyncInfo => ({
    loading: false,
    loaded: false,
    error: null
})

export const useThunk = <T extends any[]>(thunkFunction: (...args: T) => ThunkAction<void, RootState, null, AnyAction>) => {
    const dispatch: AppDispatch = useDispatch();
    
    return async (...args: T) => {
        await dispatch(thunkFunction(...args))
    };
}

export interface AsyncState<T> {
    asyncInfo: AsyncInfo,
    data: T
}