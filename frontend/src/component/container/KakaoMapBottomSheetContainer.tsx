import { Code } from '@mui/icons-material';
import { Button } from '@mui/material';
import { getTourNaviInfo } from 'api/navigation';
import { DEFAULT_MAP_LEVEL } from 'common/constants';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { RefHandles } from 'react-spring-bottom-sheet/dist/types';
import { gpsSelector } from 'redux/gps';

interface LatLng {
    lat: number;
    lng: number;
}

const KakaoMapBottomSheetContainer = (): JSX.Element => {
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
        <BottomSheet
            style={{
                zIndex: 100,
            }}
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
        </BottomSheet>
    );
};

export default KakaoMapBottomSheetContainer;
