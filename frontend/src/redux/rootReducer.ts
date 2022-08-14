import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit';

import BookMarkInfo, { BookMarkInfoState } from './bookmark';
import MyLocationGps, { GpsState } from './gps';
import MapInteractionStack, { MapInteractionStackState } from './mapinteractionstack';
import PlaceInfo, { PlaceInfoState } from './placeInfo';
import SignupInfo, { SignupOnboardState } from './signupInfo';
import TourlistArea, { TourlistAreaState } from './tourlistarea';
import UserInfo, { UserInfoState } from './userInfo';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
    },
    any
>;

const reducers = combineReducers<CombinedStateType>({
    gps: MyLocationGps,
    signupInfo: SignupInfo,
    userInfo: UserInfo,
    placeInfo: PlaceInfo,
    mapDispStack: MapInteractionStack,
    tourlistArea: TourlistArea,
    bookMarkInfo: BookMarkInfo,
});

export type RootState = ReturnType<typeof reducers>;

export default persistReducer(persistConfig, reducers);
