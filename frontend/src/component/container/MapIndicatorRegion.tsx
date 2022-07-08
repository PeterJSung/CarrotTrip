import { Box } from '@mui/material';
import MyLocationBtn from '../basic/KakaoMap/MyLocationBtn';
import MyProfileBtn from '../basic/KakaoMap/MyProfileBtn';
import RegionDiscription from '../basic/KakaoMap/RegionDiscription';

const MapIndicatorRegion = (): JSX.Element => {
    return (
        <Box zIndex={-15}>
            <MyProfileBtn onClick={console.log} />
            <RegionDiscription region="test" />
            <MyLocationBtn onClick={console.log} />
        </Box>
    );
};

export default MapIndicatorRegion;
