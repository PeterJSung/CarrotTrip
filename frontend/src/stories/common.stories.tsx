import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyLocationGps from 'redux/gps';
import MapInteractionStack from 'redux/mapinteractionstack';
import PlaceInfo, { PlaceInfoState } from 'redux/placeInfo';
import UserInfo, { UserInfoState } from 'redux/userInfo';

import { CombinedStateType } from 'redux/rootReducer';
import SignupInfo, { getDefaultSignupInfoDisp, SignupOnboardState } from 'redux/signupInfo';
import { PlaceBasicInformation, PlaceDetailInformation } from 'vo/placeInfo';

import { ID_EVALUATION_AREA_URL } from 'api/evaluationAreaRetrieve';
import { ID_EXIST_URL } from 'api/idretrieve';
import { FIND_NAVIGATION_URL } from 'api/navigation';

import MockApiResNavi from './apimock/navi.json';

const genDummyStore = (nextStore?: Partial<CombinedStateType>) => {
    return configureStore({
        reducer: combineReducers<CombinedStateType>({
            gps: nextStore ? (nextStore.gps ? nextStore.gps : MyLocationGps) : MyLocationGps,
            signupInfo: nextStore ? (nextStore.signupInfo ? nextStore.signupInfo : SignupInfo) : SignupInfo,
            userInfo: nextStore ? (nextStore.userInfo ? nextStore.userInfo : UserInfo) : UserInfo,
            placeInfo: nextStore ? (nextStore.placeInfo ? nextStore.placeInfo : PlaceInfo) : PlaceInfo,
            mapDispStack: nextStore
                ? nextStore.mapDispStack
                    ? nextStore.mapDispStack
                    : MapInteractionStack
                : MapInteractionStack,
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

const dummyPlaceStore: PlaceInfoState = {
    data: {
        basicInfo: getDummyPlaceBasic,
        detailInfo: getDummyPlaceDetail,
        writedReviewInfo: { rating: 0, reviewText: '' },
    },
};

const dummyUserInfoStore: UserInfoState = {
    data: {
        isLogin: false,
        mbti: 'ITNJ',
        name: '테스트 아이디',
    },
};

const dummySingupInfoStore: SignupOnboardState = {
    data: {
        signupInfo1: {
            disp: getDefaultSignupInfoDisp(),
            userInfo: {
                nickName: 'TestNickName',
                pw: 'testPw',
                pwConfirm: 'testPwConfirm',
            },
        },
        signupInfo2: { disp: getDefaultSignupInfoDisp(), userInfo: [] },
        signupInfo2Banner: {},
        signupInfo3: { disp: getDefaultSignupInfoDisp(), userInfo: undefined },
        signupInfo4: { disp: getDefaultSignupInfoDisp(), userInfo: undefined },
        signupInfo5: { disp: getDefaultSignupInfoDisp(), userInfo: undefined },
    },
};

export const mockGetEvaluationArea = {
    url: `${ID_EVALUATION_AREA_URL}/:locale`,
    method: 'GET',
    status: 200,
    response: [
        {
            contentId: 128767,
            name: '을왕리해수욕장',
            address: '인천광역시 중구 용유서로302번길 16-15',
            thumbnail1: 'http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg',
            thumbnail2: 'http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg',
        },
        {
            contentId: 124552,
            name: '광화문',
            address: '서울특별시 종로구 세종로 사직로 161',
            thumbnail1:
                'https://www.kogl.or.kr/upload_recommend/%ec%a7%80%ec%97%ad%eb%b3%84%ea%b4%80%ea%b4%91%ec%a7%80/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c/%ec%a2%85%eb%a1%9c/thumb_%ea%b4%91%ed%99%94%eb%ac%b8_001.jpg',
            thumbnail2:
                'https://www.kogl.or.kr/upload_recommend/%ec%a7%80%ec%97%ad%eb%b3%84%ea%b4%80%ea%b4%91%ec%a7%80/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c/%ec%a2%85%eb%a1%9c/thumb_%ea%b4%91%ed%99%94%eb%ac%b8_001.jpg',
        },
    ],
};

export const mockGetUserExist = {
    url: `${ID_EXIST_URL}/:id`,
    method: 'GET',
    status: 200,
    response: {
        data: false,
        message: 'TESTMSG',
        statusCode: 'TESTCODE',
    },
};

export const mockGetTourNaviInfo = {
    url: FIND_NAVIGATION_URL,
    method: 'POST',
    status: 200,
    response: MockApiResNavi,
};

export {
    genDummyStore,
    getDummyState,
    getDummyStateWithMock,
    dummyRouter,
    dummyPlaceStore,
    dummyUserInfoStore,
    dummySingupInfoStore,
};
