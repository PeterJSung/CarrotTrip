import { Box } from '@mui/material';
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_MAP_LEVEL, HIGHLIGHT_MAP_LEVEL } from 'common/constants';
import MyLocationMarker from 'component/basic/KakaoMap/MyLocationMarker';
import { useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { currentGps, temporaryGps } from 'redux/gps';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';
import { Interaction2Type, MapInteractionStackType } from 'vo/mapInteraction';
import BottomSheetSuggestionContainer from './BottomSheetSuggestionContainer';
import IndicatorDetailPlace from './IndicatorDetailPlace';
import IndicatorMapRegion from './IndicatorMapRegion';

import { useTranslation } from 'react-i18next';
import { retriveTourlistArea } from 'redux/tourlistarea';
import { getUserName } from 'redux/userInfo';
import { LocationInfo } from 'vo/gps';
import BottomSheetPlaceDetailContainer from './BottomSheetPlaceDetailContainer';
import KakaoMapMarkerContainer from './KakaoMapMarkerContainer';

const getHighlightInfo = (data: MapInteractionStackType): LocationInfo | undefined => {
    if (data[1]) {
        return {
            lat: DEFAULT_LAT,
            lng: DEFAULT_LNG,
            zoom: HIGHLIGHT_MAP_LEVEL,
        };
    } else {
        return undefined;
    }
};

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

    const updateInteraction = useThunk(updateInetractionStack);
    const retriveTourThunk = useThunk(retriveTourlistArea);

    const currentGpsInfo = useSelector(currentGps);
    const temporaryGpsInfo = useSelector(temporaryGps);
    const interactionStack = useSelector(getMapInteractionStack);
    const userName = useSelector(getUserName);

    const mapRef = useRef<kakao.maps.Map>(null);

    const highLightPos = getHighlightInfo(interactionStack);

    useEffect(() => {
        if (!currentGpsInfo.isDefault) {
            retriveTourThunk(currentGpsInfo, userName, i18n.language);
        }
    }, [currentGpsInfo]);

    const centerPos: LocationInfo = {
        lat: currentGpsInfo.lat,
        lng: currentGpsInfo.lng,
        zoom: DEFAULT_MAP_LEVEL,
    };

    if (interactionStack[1] && interactionStack[0]) {
        centerPos.lat = interactionStack[0].selectedData.lat;
        centerPos.lng = interactionStack[0].selectedData.lng;
        centerPos.zoom = HIGHLIGHT_MAP_LEVEL;
    }

    const markerClick = () => {
        const markerInfo: Interaction2Type = {
            type: 'Interaction2',
            tabIdx: 0,
            selectedData: {
                id: 1,
                lat: DEFAULT_LAT,
                lng: DEFAULT_LNG,
            },
        };
        updateInteraction(markerInfo);
    };

    useEffect(() => {
        const map = mapRef.current;
        if (map) {
            map.setCenter(new kakao.maps.LatLng(currentGpsInfo.lat, currentGpsInfo.lng));
            map.setLevel(DEFAULT_MAP_LEVEL);
        }
    }, [mapRef, currentGpsInfo]);

    return (
        <Box width="100%" height="100%" position="relative" display="flex">
            <Map
                ref={mapRef}
                level={centerPos.zoom}
                zoomable={!highLightPos}
                draggable={!highLightPos}
                center={{ lat: centerPos.lat - 0.0027, lng: centerPos.lng }}
                style={{ flexGrow: 1 }}
            >
                <MyLocationMarker lat={currentGpsInfo.lat} lng={currentGpsInfo.lng} />
                <KakaoMapMarkerContainer />
            </Map>
            {interactionStack[1] !== undefined ? <IndicatorDetailPlace /> : <IndicatorMapRegion />}
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
