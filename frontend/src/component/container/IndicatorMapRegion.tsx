import { getC2RData } from 'api/coord2region';
import { getGeoLocationInfo, parserRegionStr } from 'common/util';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { currentGps, updateCurrentGpsThunk } from 'redux/gps';
import MyLocationBtn from '../basic/KakaoMap/MyLocationBtn';
import MyProfileBtn from '../basic/KakaoMap/MyProfileBtn';
import RegionDiscription from '../basic/KakaoMap/RegionDiscription';
import CommonIndicator from './CommonIndicator';

const IndicatorMapRegion = (): JSX.Element => {
    const currentGpsInfo = useSelector(currentGps);
    const updateGpsState = useThunk(updateCurrentGpsThunk);

    const myLocationBtnClick = () => {
        getGeoLocationInfo(async (lat: number, lng: number) => {
            const res = await getC2RData(lat, lng);
            updateGpsState(lat, lng, parserRegionStr(res));
            //updateGpsState(lat, lng, DEFAULT_MAP_LEVEL, parserRegionStr(res));
        });
    };

    return (
        <CommonIndicator>
            <MyProfileBtn onClick={console.log} />
            <RegionDiscription region={currentGpsInfo.regionStr} />
            <MyLocationBtn onClick={myLocationBtnClick} />
        </CommonIndicator>
    );
};

export default IndicatorMapRegion;
