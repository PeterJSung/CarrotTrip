import { Button } from '@mui/material';
import { getC2RData } from 'api/coord2region';
import { getGeoLocationInfo, getRandomArbitrary, parserRegionStr } from 'common/util';
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

const DIFF = 1000000000;

const IndicatorMapRegion = (): JSX.Element => {
    const navigation = useNavigate();
    const currentGpsInfo = useSelector(currentGps);
    const userName = useSelector(getUserName);
    const updateGpsState = useThunk(updateCurrentGpsThunk);

    const myLocationBtnClick = () => {
        getGeoLocationInfo(async (lat: number, lng: number) => {
            const ranLat = getRandomArbitrary(0, 9) / DIFF;
            const ranLng = getRandomArbitrary(0, 9) / DIFF;
            const res = await getC2RData(lat, lng);
            updateGpsState(lat + ranLat, lng + ranLng, parserRegionStr(res));
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
