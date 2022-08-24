import { Button } from '@mui/material';
import { getC2RData } from 'api/coord2region';
import { getGeoLocationInfo, parserRegionStr } from 'common/util';
import AvartarGenerator from 'component/basic/common/AvartarGenerator';
import { PATH_MYPROFILE_PAGE } from 'component/page/common';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { currentGps, updateCurrentGpsThunk } from 'redux/gps';
import { getUserName } from 'redux/userInfo';
import MyLocationBtn from '../basic/KakaoMap/MyLocationBtn';
import RegionDiscription from '../basic/KakaoMap/RegionDiscription';
import CommonIndicator from './CommonIndicator';

const IndicatorMapRegion = (): JSX.Element => {
    const navigation = useNavigate();
    const currentGpsInfo = useSelector(currentGps);
    const userName = useSelector(getUserName);
    const updateGpsState = useThunk(updateCurrentGpsThunk);

    const myLocationBtnClick = () => {
        getGeoLocationInfo(async (lat: number, lng: number) => {
            const res = await getC2RData(lat, lng);
            updateGpsState(lat, lng, parserRegionStr(res));
            //updateGpsState(lat, lng, DEFAULT_MAP_LEVEL, parserRegionStr(res));
        });
    };

    const onMyProfileBtnClick = () => {
        navigation(PATH_MYPROFILE_PAGE);
    };

    return (
        <CommonIndicator>
            <Button
                style={{
                    zIndex: 3,
                    padding: 0,
                    margin: 0,
                    minWidth: 0,
                }}
                onClick={onMyProfileBtnClick}
            >
                <AvartarGenerator sz={2.5} id={userName} />
            </Button>
            <RegionDiscription region={currentGpsInfo.regionStrShort} />
            <MyLocationBtn onClick={myLocationBtnClick} />
        </CommonIndicator>
    );
};

export default IndicatorMapRegion;
