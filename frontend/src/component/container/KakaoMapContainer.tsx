import { Box } from '@mui/material';
import { DEFAULT_MAP_LEVEL } from 'common/constants';
import KakaoMapMarkerList, { MarkerInfo } from 'component/basic/KakaoMap/MarkerList';
import MyLocationMarker from 'component/basic/KakaoMap/MyLocationMarker';
import { useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { gpsSelector } from 'redux/gps';
import MapIndicatorRegion from './MapIndicatorRegion';

const KakaoMapContainer = (): JSX.Element => {
    /*
    만약 이방식으로 하면 내부에서 hook 으로 주입하는거기때문에 load 가 늦어짐.
    반응성 빠르게하기위해서는 Script 로 외부주입하는게 맞다.
    const { loading, error } = useInjectKakaoMapApi({
        appkey: 'ba17db35aaf7271bc3d43b4bdce38256', // 발급 받은 APPKEY
        url: '//dapi.kakao.com/v2/maps/sdk.js',
    });
    */
    const currentGpsInfo = useSelector(gpsSelector);
    const markers: MarkerInfo[] = [];

    const mapRef = useRef<kakao.maps.Map>(null);

    useEffect(() => {
        const map = mapRef.current;
        if (map) {
            map.setCenter(new kakao.maps.LatLng(currentGpsInfo.lat, currentGpsInfo.lng));
            map.setLevel(DEFAULT_MAP_LEVEL);
        }
    }, [mapRef, currentGpsInfo]);

    return (
        <Box width="100%" height="100%" position="relative">
            <Map
                ref={mapRef}
                center={{ lat: currentGpsInfo.lat, lng: currentGpsInfo.lng }}
                style={{ width: '100%', height: '100%' }}
            >
                <MyLocationMarker lat={currentGpsInfo.lat} lng={currentGpsInfo.lng} />
                <KakaoMapMarkerList onClick={console.log} markers={markers} />
            </Map>
            <MapIndicatorRegion />
        </Box>
    );
};

export default KakaoMapContainer;
