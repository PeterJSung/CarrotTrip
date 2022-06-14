import { Box } from '@mui/material';
import KakaoMap from 'component/basic/KakaoMap/Maps';
import { useCallback, useEffect, useState } from 'react';
import { useThunk } from 'redux/common';
import { updateGpsThunk } from 'redux/gps';
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
    const updateGpsState = useThunk(updateGpsThunk);
    useEffect(() => {
        getGeoLocationInfo(setGpsState);
    }, []);

    const resetPosClick = useCallback(() => {
        // timeout at 60000 milliseconds (60 seconds)
        getGeoLocationInfo(setGpsState);
    }, [setGpsState]);

    useEffect(() => {
        updateGpsState(gpsState.lat, gpsState.lng);
    }, [gpsState]);

    return (
        <Box width="100%" height="100%" position="relative">
            <KakaoMap gpsInfo={gpsState} onClickMarker={() => {}} onClickPosReset={resetPosClick} />
        </Box>
    );
};

export default KakaoMapContainer;
