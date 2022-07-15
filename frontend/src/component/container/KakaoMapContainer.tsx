import { Code } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { getTourNaviInfo } from 'api/navigation';
import { DEFAULT_MAP_LEVEL } from 'common/constants';
import MyLocationMarker from 'component/basic/KakaoMap/MyLocationMarker';
import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { RefHandles } from 'react-spring-bottom-sheet/dist/types';
import { gpsSelector } from 'redux/gps';
import styled from 'styled-components';
import IndicatorMapRegion from './IndicatorMapRegion';

interface LatLng {
    lat: number;
    lng: number;
}

const CustomBtnSheet = styled(BottomSheet)`
    & > div {
        width: 95%;
        margin: auto;
    }
    & > div > [data-rsbs-header] {
        padding: 0.5rem 0rem;
    }
`;

const KakaoMapContainer = (): JSX.Element => {
    /*
    만약 이방식으로 하면 내부에서 hook 으로 주입하는거기때문에 load 가 늦어짐.
    반응성 빠르게하기위해서는 Script 로 외부주입하는게 맞다.
    const { loading, error } = useInjectKakaoMapApi({
        appkey: 'ba17db35aaf7271bc3d43b4bdce38256', // 발급 받은 APPKEY
        url: '//dapi.kakao.com/v2/maps/sdk.js',
    });
    */

    const [open, setOpen] = useState<boolean>(false);
    const [road, setRoad] = useState<LatLng[]>([]);
    const [markers, setMarkers] = useState<LatLng[]>([]);
    const currentGpsInfo = useSelector(gpsSelector);
    //const markers: MarkerInfo[] = [];

    const mapRef = useRef<kakao.maps.Map>(null);

    const [staticMode, setStaticMode] = useState<boolean>(false);
    const bottomSheetRef = useRef<RefHandles>(null);

    useEffect(() => {
        const map = mapRef.current;
        if (map) {
            map.setCenter(new kakao.maps.LatLng(currentGpsInfo.lat, currentGpsInfo.lng));
            map.setLevel(DEFAULT_MAP_LEVEL);
        }
    }, [mapRef, currentGpsInfo]);

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

    useEffect(() => {
        setTimeout(() => {
            console.log(`Transition Complete`);
            mapRef.current?.relayout();
        }, 500);
    }, [open]);
    console.log(`Render after`);
    return (
        <Box width="100%" height="100%" position="relative" display="flex">
            <Map ref={mapRef} center={{ lat: currentGpsInfo.lat, lng: currentGpsInfo.lng }} style={{ flexGrow: 1 }}>
                <MyLocationMarker lat={currentGpsInfo.lat} lng={currentGpsInfo.lng} />
                {markers.map((res) => (
                    <MapMarker
                        position={{
                            ...res,
                        }}
                    />
                ))}

                <MapMarker
                    onClick={() => setOpen(true)}
                    position={{ lat: currentGpsInfo.lat, lng: currentGpsInfo.lng }}
                />
                <Polyline
                    path={road}
                    strokeWeight={10} // 선의 두께 입니다
                    strokeColor={'blue'} // 선의 색깔입니다
                    strokeOpacity={0.5} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle={'solid'} // 선의 스타일입니다
                />
            </Map>
            <IndicatorMapRegion />
            <CustomBtnSheet
                open={open}
                onDismiss={() => setOpen(false)}
                blocking={false}
                header={
                    <input
                        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
                        type="text"
                        placeholder="Text input field in a sticky header"
                    />
                }
                defaultSnap={1}
                snapPoints={({ maxHeight }) => {
                    if (staticMode) {
                        console.log(`Itis static Mode`);
                        return [maxHeight * 0.8];
                    } else {
                        console.log(`Not StaticMode`);
                        return [maxHeight * 0.4, maxHeight * 0.95];
                    }
                }}
            >
                <Button onClick={() => setStaticMode(!staticMode)}>Test</Button>
                <p>
                    When <Code>blocking</Code> is <Code>false</Code> it's possible to use the Bottom Sheet as an height
                    adjustable sidebar/panel.
                </p>
                <p>
                    You can combine this with <Code>onDismissable</Code> to fine-tune the behavior you want.
                </p>
            </CustomBtnSheet>
        </Box>
    );
};

export default KakaoMapContainer;
