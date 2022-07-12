import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gps from 'redux/gps';
import PlaceInfo from 'redux/placeInfo';
import UserInfo from 'redux/userInfo';

import { PlaceInfoState } from 'redux/placeInfo';
import { CombinedStateType } from 'redux/rootReducer';
import SignupInfo from 'redux/signupInfo';
import { PlaceBasicInformation, PlaceDetailInformation } from 'vo/placeInfo';

const genDummyStore = (nextStore?: Partial<CombinedStateType>) => {
    return configureStore({
        reducer: combineReducers<CombinedStateType>({
            gps: nextStore ? (nextStore.gps ? nextStore.gps : Gps) : Gps,
            signupInfo: nextStore ? (nextStore.signupInfo ? nextStore.signupInfo : SignupInfo) : SignupInfo,
            userInfo: nextStore ? (nextStore.userInfo ? nextStore.userInfo : UserInfo) : UserInfo,
            placeInfo: nextStore ? (nextStore.placeInfo ? nextStore.placeInfo : PlaceInfo) : PlaceInfo,
        }),
    });
};

const getDummyState = (storyRet: JSX.Element): JSX.Element => <Provider store={genDummyStore()}>{storyRet}</Provider>;
const getDummyStateWithMock = (storyRet: JSX.Element, store: Partial<CombinedStateType>): JSX.Element => (
    <Provider store={genDummyStore(store)}>{storyRet}</Provider>
);

const dummyRouter = (storyRet: JSX.Element): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={storyRet} />
        </Routes>
    </BrowserRouter>
);

const getDummyPlaceBasic: PlaceBasicInformation = {
    placename: 'Test Place Name',
    placeType: 'Type',
};

const getDummyPlaceDetail: PlaceDetailInformation = {
    adress: 'Test Address Info',
    description: 'Test Description Info. Lorem Ipsume blabla',
    mbtiArr: [],
    moodArr: [1, 3, 4, 5, 6, 7, 8, 9, 10],
    reviewArr: [],
};

const dummyPlcaeStore: PlaceInfoState = {
    data: {
        basicInfo: getDummyPlaceBasic,
        detailInfo: getDummyPlaceDetail,
        writedReviewInfo: { rating: 0, reviewText: '' },
    },
};

export { genDummyStore, getDummyState, getDummyStateWithMock, dummyRouter, dummyPlcaeStore };
