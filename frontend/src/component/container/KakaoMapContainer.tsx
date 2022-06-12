import { Box } from '@mui/material';
import KakaoMap from 'component/basic/KakaoMap/Maps';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { gpsSelector, updateGpsThunk } from 'redux/gps';

const getGeoLocationInfo = (cb: (lat: number, lng: number) => Promise<void>) => {
    const options: PositionOptions = { timeout: 6000 };
    navigator.geolocation &&
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                await cb(position.coords.latitude, position.coords.longitude);
            },
            console.error,
            options,
        );
};

const KakaoMapContainer = (): JSX.Element => {
    const curGps = useSelector(gpsSelector);
    const updateGps = useThunk(updateGpsThunk);
    useEffect(() => {
        getGeoLocationInfo(updateGps);
    }, []);

    const resetPosClick = useCallback(() => {
        // timeout at 60000 milliseconds (60 seconds)
        getGeoLocationInfo(updateGps);
    }, [updateGps]);
    console.log(curGps);
    return (
        <Box width="100%" height="100%" position="relative">
            <KakaoMap gpsInfo={curGps} onClickMarker={() => {}} onClickPosReset={resetPosClick} />
        </Box>
    );
};

export default KakaoMapContainer;
