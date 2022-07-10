import { getC2RData } from 'api/coord2region';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { gpsSelector, updateGpsThunk } from 'redux/gps';
import { KakaoRegionAPIRes } from 'vo/gps';
import MyLocationBtn from '../basic/KakaoMap/MyLocationBtn';
import MyProfileBtn from '../basic/KakaoMap/MyProfileBtn';
import RegionDiscription from '../basic/KakaoMap/RegionDiscription';
import CommonIndicator from './CommonIndicator';

const getGeoLocationInfo = (cb: (lat: number, lng: number) => void) => {
    const options: PositionOptions = { timeout: 6000 };
    navigator.geolocation &&
        navigator.geolocation.getCurrentPosition(
            (position) => {
                cb(position.coords.latitude, position.coords.longitude);
            },
            console.error,
            options,
        );
};

const parserRegionStr = (apiRes: KakaoRegionAPIRes): string => {
    let retData = apiRes.documents.filter((d) => d.region_type === 'B');
    if (!retData) {
        retData = apiRes.documents.filter((d) => d.region_type === 'H');
    }
    return `${retData[0].region_1depth_name}, ${retData[0].region_3depth_name}`;
};

const MapIndicatorRegion = (): JSX.Element => {
    const currentGpsInfo = useSelector(gpsSelector);
    const updateGpsState = useThunk(updateGpsThunk);
    useEffect(() => {
        myLocationBtnClick();
    }, []);

    const myLocationBtnClick = () => {
        getGeoLocationInfo(async (lat: number, lng: number) => {
            const res = await getC2RData(lat, lng);
            updateGpsState(lat, lng, parserRegionStr(res));
        });
    };

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
        <CommonIndicator>
            <MyProfileBtn onClick={console.log} />
            <RegionDiscription region={currentGpsInfo.regionStr} />
            <MyLocationBtn onClick={myLocationBtnClick} />
        </CommonIndicator>
    );
};

export default MapIndicatorRegion;
