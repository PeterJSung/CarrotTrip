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
        const item = totalTourlistSet[dataTwo.eventTypeId][dataTwo.idx];
        console.log(item);
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

const DEFAULT_HIGHLIGHT_OFFSET_LAT = 0.0027;

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
    const updateGpsState = useThunk(updateCurrentGpsThunk);

    const mapRef = useRef<kakao.maps.Map>(null);

    useEffect(() => {
        if (!currentGpsInfo.isDefault && typeof userInfo !== 'string') {
            retriveTourThunk(currentGpsInfo, userInfo.name, i18n.language, userInfo.mbti);
        }
    }, [currentGpsInfo]);

    const isPlaceDetail = interactionType === 'PLACEDETAIL';
    const highLightPos = getHighlightInfo(dataOne, dataTwo, totalDataSet);
    const centerPos: LocationInfo = {
        lat: highLightPos ? highLightPos.lat - DEFAULT_HIGHLIGHT_OFFSET_LAT : currentGpsInfo.lat,
        lng: highLightPos ? highLightPos.lng : currentGpsInfo.lng,
        zoom: highLightPos ? highLightPos.zoom : DEFAULT_MAP_LEVEL,
    };

    useEffect(() => {
        const map = mapRef.current;
        if (map) {
            map.setCenter(new kakao.maps.LatLng(currentGpsInfo.lat, currentGpsInfo.lng));
            map.setLevel(DEFAULT_MAP_LEVEL);
        }
    }, [mapRef, currentGpsInfo]);

    useEffect(() => {
        getGeoLocationInfo(async (lat: number, lng: number) => {
            const res = await getC2RData(lat, lng);
            updateGpsState(lat, lng, parserRegionStr(res));
        });
    }, []);

    return (
        <Box width="100%" height="100%" position="relative" display="flex">
            <Map
                ref={mapRef}
                level={centerPos.zoom}
                disableDoubleClick={true}
                zoomable={!isPlaceDetail}
                draggable={!isPlaceDetail}
                center={{ lat: centerPos.lat, lng: centerPos.lng }}
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

/*
                {markers.map((res) => (
                    <MapMarker
                        position={{
                            ...res,
                        }}
                    />
                ))}

                <Polyline
                    path={road}
                    strokeWeight={10} // 선의 두께 입니다
                    strokeColor={'blue'} // 선의 색깔입니다
                    strokeOpacity={0.5} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle={'solid'} // 선의 스타일입니다
                />
    useEffect(() => {
        const fetch = async () => {
            console.log(`NaviStart`);
            const ret = await getTourNaviInfo(
                {
                    x: 126.97224161387756,
                    y: 37.57776094924411,
                },
                [
                    {
                        y: 37.57412170480612,
                        x: 126.9757522146493,
                    },
                    {
                        y: 37.57249172836604,
                        x: 126.98016750972909,
                    },
                    {
                        y: 37.57129493286989,
                        x: 126.99429485433944,
                    },
                    {
                        y: 37.573106029495335,
                        x: 127.0031243220909,
                    },
                ],
            );

            const roadVertex: LatLng[] = [];
            const position: LatLng[] = [];
            ret.routes.forEach((r) => {
                r.sections.forEach((s) => {
                    s.roads.forEach((aaa) => {
                        for (let i = 0; i < aaa.vertexes.length; i += 2) {
                            roadVertex.push({
                                lng: aaa.vertexes[i],
                                lat: aaa.vertexes[i + 1],
                            });
                        }
                    });
                });
            });
            position.push({
                lat: ret.routes[0].summary.origin.y,
                lng: ret.routes[0].summary.origin.x,
            });
            ret.routes[0].summary.waypoints.forEach((d) => {
                position.push({
                    lat: d.y,
                    lng: d.x,
                });
            });
            position.push({
                lat: ret.routes[0].summary.destination.y,
                lng: ret.routes[0].summary.destination.x,
            });
            setRoad(roadVertex);
            setMarkers(position);
        };
        fetch();
    }, []);
*/
