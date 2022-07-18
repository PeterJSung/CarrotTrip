import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit';

import MyLocationGps, { GpsState } from './gps';
import MapInteractionStack, { MapInteractionStackState } from './mapinteractionstack';
import PlaceInfo, { PlaceInfoState } from './placeInfo';
import SignupInfo, { SignupOnboardState } from './signupInfo';
import UserInfo, { UserInfoState } from './userInfo';

export type CombinedStateType = ReducersMapObject<
    {
        gps: GpsState;
        signupInfo: SignupOnboardState;
        userInfo: UserInfoState;
        placeInfo: PlaceInfoState;
        mapDispStack: MapInteractionStackState;
    },
    any
>;

const reducers = combineReducers<CombinedStateType>({
    gps: MyLocationGps,
    signupInfo: SignupInfo,
    userInfo: UserInfo,
    placeInfo: PlaceInfo,
    mapDispStack: MapInteractionStack,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
