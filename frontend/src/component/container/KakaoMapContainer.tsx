import { Box } from '@mui/material';
import { DEFAULT_MAP_LEVEL, HIGHLIGHT_MAP_LEVEL } from 'common/constants';
import MyLocationMarker from 'component/basic/KakaoMap/MyLocationMarker';
import { useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { currentGps, updateCurrentGpsThunk } from 'redux/gps';
import { getCurrentInteractionType, getTypeOneData, getTypeTwoData } from 'redux/mapinteractionstack';
import { Interaction2Type, Interaction3Type } from 'vo/mapInteraction';
import BottomSheetSuggestionContainer from './BottomSheetSuggestionContainer';
import IndicatorDetailPlace from './IndicatorDetailPlace';
import IndicatorMapRegion from './IndicatorMapRegion';

import { getC2RData } from 'api/coord2region';
import { getGeoLocationInfo, parserRegionStr } from 'common/util';
import { useTranslation } from 'react-i18next';
import { retrieveAllBookMark } from 'redux/bookmark';
import { getSuggestionListArr, retriveTourlistArea } from 'redux/tourlistarea';
import { getUserInfo } from 'redux/userInfo';
import { LocationInfo } from 'vo/gps';
import { TourlistDataset } from 'vo/travelInfo';
import BottomSheetPlaceDetailContainer from './BottomSheetPlaceDetailContainer';
import KakaoMapMarkerContainer from './KakaoMapMarkerContainer';
import KakaoMapPoligonContainer from './KakaoMapPoligonContainer';

const getHighlightInfo = (
    dataOne: Interaction2Type | undefined,
    dataTwo: Interaction3Type | undefined,
    totalTourlistSet: {
        [key: string]: TourlistDataset[];
    },
): LocationInfo | undefined => {
    if (dataTwo) {
        const idx = totalTourlistSet[dataTwo.eventTypeId].findIndex((d) => d.contentId === dataTwo.id);
        const item = totalTourlistSet[dataTwo.eventTypeId][idx];
        return {
            lat: item.lat,
            lng: item.lng,
            zoom: HIGHLIGHT_MAP_LEVEL,
        };
    } else if (dataOne && dataOne.selectedData?.pos) {
        return dataOne.selectedData.pos;
    } else {
        return undefined;
    }
};

const DIFF_OFFSET = 3.44 * Math.pow(10, -6);

const KakaoMapContainer = (): JSX.Element => {
    const { i18n } = useTranslation();
    /*
    만약 이방식으로 하면 내부에서 hook 으로 주입하는거기때문에 load 가 늦어짐.
    반응성 빠르게하기위해서는 Script 로 외부주입하는게 맞다.
    const { loading, error } = useInjectKakaoMapApi({
        appkey: 'ba17db35aaf7271bc3d43b4bdce38256', // 발급 받은 APPKEY
        url: '//dapi.kakao.com/v2/maps/sdk.js',
    });
    */
    const retriveTourThunk = useThunk(retriveTourlistArea);

    const currentGpsInfo = useSelector(currentGps);
    const totalDataSet = useSelector(getSuggestionListArr);
    const interactionType = useSelector(getCurrentInteractionType);
    const dataOne = useSelector(getTypeOneData);
    const dataTwo = useSelector(getTypeTwoData);
    const userInfo = useSelector(getUserInfo);
    const getAllBookMarks = useThunk(retrieveAllBookMark);
    const updateGpsState = useThunk(updateCurrentGpsThunk);

    const mapRef = useRef<kakao.maps.Map>(null);

    useEffect(() => {
        typeof userInfo !== 'string' && getAllBookMarks(userInfo.name);
    }, [userInfo]);

    const isPlaceDetail = interactionType === 'PLACEDETAIL';
    const highLightPos = getHighlightInfo(dataOne, dataTwo, totalDataSet);

    const centerPos: LocationInfo = {
        lat: highLightPos ? highLightPos.lat : currentGpsInfo.lat,
        lng: highLightPos ? highLightPos.lng : currentGpsInfo.lng,
        zoom: highLightPos ? highLightPos.zoom : DEFAULT_MAP_LEVEL,
    };

    useEffect(() => {
        getGeoLocationInfo(async (lat: number, lng: number) => {
            const res = await getC2RData(lat, lng);
            typeof userInfo !== 'string' && retriveTourThunk(lat, lng, userInfo.name, i18n.language, userInfo.mbti);
            updateGpsState(lat, lng, parserRegionStr(res));
        });
    }, []);
    console.log(`Main Render`);
    console.log(dataOne);
    console.log(dataTwo);

    const DIFF = DIFF_OFFSET * document.documentElement.clientHeight;

    return (
        <Box width="100%" height="100%" position="relative" display="flex">
            <Map
                ref={mapRef}
                level={centerPos.zoom}
                disableDoubleClick={true}
                zoomable={!isPlaceDetail}
                draggable={!isPlaceDetail}
                center={{ lat: centerPos.lat - (highLightPos ? DIFF : 0), lng: centerPos.lng }}
                style={{ flexGrow: 1 }}
            >
                <MyLocationMarker lat={currentGpsInfo.lat} lng={currentGpsInfo.lng} />
                <KakaoMapPoligonContainer />
                <KakaoMapMarkerContainer />
            </Map>
            {isPlaceDetail ? <IndicatorDetailPlace /> : <IndicatorMapRegion />}
            <BottomSheetPlaceDetailContainer />
            <BottomSheetSuggestionContainer />
        </Box>
    );
};

export default KakaoMapContainer;
