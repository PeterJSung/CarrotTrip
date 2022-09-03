import {
    ActionFromReducersMapObject,
    CombinedState,
    combineReducers,
    ReducersMapObject,
    StateFromReducersMapObject,
} from '@reduxjs/toolkit';

import BookMarkInfo, { BookMarkInfoState } from './bookmark';
import MyLocationGps, { GpsState } from './gps';
import MapInteractionStack, { MapInteractionStackState } from './mapinteractionstack';
import PlaceInfo, { PlaceInfoState } from './placeInfo';
import ReviewInfo, { ReviewInfoState } from './review';
import SignupInfo, { SignupOnboardState } from './signupInfo';
import TourlistArea, { TourlistAreaState } from './tourlistarea';
import UserInfo, { UserInfoState } from './userInfo';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SignoutSessionActions } from './signoutsession';

const persistConfig = {
    key: 'root',
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
    whitelist: ['userInfo'],
    // blacklist -> 그것만 제외합니다
};

export type CombinedStateType = ReducersMapObject<
    {
        gps: GpsState;
        signupInfo: SignupOnboardState;
        userInfo: UserInfoState;
        placeInfo: PlaceInfoState;
        mapDispStack: MapInteractionStackState;
        tourlistArea: TourlistAreaState;
        bookMarkInfo: BookMarkInfoState;
        reviewInfo: ReviewInfoState;
    },
    any
>;

const appReducer = combineReducers<CombinedStateType>({
    gps: MyLocationGps,
    signupInfo: SignupInfo,
    userInfo: UserInfo,
    placeInfo: PlaceInfo,
    mapDispStack: MapInteractionStack,
    tourlistArea: TourlistArea,
    bookMarkInfo: BookMarkInfo,
    reviewInfo: ReviewInfo,
});

const rootReducer = (
    state: CombinedState<StateFromReducersMapObject<CombinedStateType>>,
    action: ActionFromReducersMapObject<CombinedStateType>,
) => {
    if (action.type === SignoutSessionActions.SIGNOUT || action.type === SignoutSessionActions.DELETE_USER) {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root');
        // storage.removeItem('persist:otherKey')

        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};
export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, (state: any, action: any) => {
    return rootReducer(state, action);
});
