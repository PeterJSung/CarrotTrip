import { getC2RData } from 'api/coord2region';
import { useEffect } from 'react';
import { useThunk } from 'redux/common';
import { updateGpsThunk } from 'redux/gps';
import { Gps } from 'vo/gps';
import MyLocationBtn from '../basic/KakaoMap/MyLocationBtn';
import MyProfileBtn from '../basic/KakaoMap/MyProfileBtn';
import RegionDiscription from '../basic/KakaoMap/RegionDiscription';
import IndicatorCommon from './IndicatorCommon';

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

const MapIndicatorRegion = (): JSX.Element => {
    const updateGpsState = useThunk(updateGpsThunk);
    useEffect(() => {
        getGeoLocationInfo(async (nextGps: Gps) => {
            const res = await getC2RData(nextGps.lat, nextGps.lng);
            console.log(res);
        });
    }, []);
    /*
    const resetPosClick = useCallback(() => {
        // timeout at 60000 milliseconds (60 seconds)
        getGeoLocationInfo(setGpsState);
    }, [setGpsState]);

    useEffect(() => {
        updateGpsState(gpsState.lat, gpsState.lng);
    }, [gpsState]);
*/
    return (
        <IndicatorCommon>
            <MyProfileBtn onClick={console.log} />
            <RegionDiscription region="test" />
            <MyLocationBtn onClick={console.log} />
        </IndicatorCommon>
    );
};

export default MapIndicatorRegion;
