import { DEFAULT_MAP_LEVEL } from 'common/constants';
import { useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Gps } from 'vo/gps';
import KakaoMapMarkerList, { MarkerInfo } from './MarkerList';
import KakaoMapNowLocationBtn from './NowLocationBtn';

export interface KaKaoMapProps {
    gpsInfo: Gps;
    onClickPosReset: () => void;
    onClickMarker: (id: number) => void;
}

const KakaoMap = ({ gpsInfo, ...events }: KaKaoMapProps): JSX.Element => {
    const markers: MarkerInfo[] = [];

    const mapRef = useRef<kakao.maps.Map>(null);

    useEffect(() => {
        const map = mapRef.current;
        if (map) {
            map.setCenter(new kakao.maps.LatLng(gpsInfo.lat, gpsInfo.lng));
            map.setLevel(DEFAULT_MAP_LEVEL);
        }
    }, [mapRef, gpsInfo]);

    return (
        <>
            <Map ref={mapRef} center={{ lat: gpsInfo.lat, lng: gpsInfo.lng }} style={{ width: '100%', height: '100%' }}>
                <KakaoMapMarkerList onClick={events.onClickMarker} markers={markers} />
            </Map>
            <KakaoMapNowLocationBtn onClick={events.onClickPosReset} />
        </>
    );
};

export default KakaoMap;
