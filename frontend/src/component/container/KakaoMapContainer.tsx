import { Box } from '@mui/material';
import { useDebounce } from 'common/customhook';
import KakaoMap from 'component/basic/KakaoMap/Maps';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { gpsSelector, updateGpsThunk } from 'redux/gps';
import { DEFAULT_GPS, Gps } from 'vo/gps';

const getGeoLocationInfo = (cb: (gpsData: Gps) => void) => {
    const options: PositionOptions = { timeout: 6000 };
    navigator.geolocation &&
        navigator.geolocation.getCurrentPosition(
            (position) => {
                cb({ lat: position.coords.latitude, lng: position.coords.longitude });
            },
            console.error,
            options,
        );
};

const KakaoMapContainer = (): JSX.Element => {
    const [gpsState, setGpsState] = useState<Gps>(DEFAULT_GPS);
    const debounceGps = useDebounce<Gps>(gpsState, 500); // 디바운스가 꼭필요한지?? 사실잘모르겠음 gps 리셋버튼을 자주누르는것도 아니기때문
    const updateGpsState = useThunk(updateGpsThunk);
    useEffect(() => {
        getGeoLocationInfo(setGpsState);
    }, []);

    const resetPosClick = useCallback(() => {
        // timeout at 60000 milliseconds (60 seconds)
        getGeoLocationInfo(setGpsState);
    }, [setGpsState]);

    useEffect(() => {
        updateGpsState(debounceGps.lat, debounceGps.lng);
    }, [debounceGps]);

    return (
        <Box width="100%" height="100%" position="relative">
            <KakaoMap gpsInfo={gpsState} onClickMarker={() => {}} onClickPosReset={resetPosClick} />
        </Box>
    );
};

export default KakaoMapContainer;
