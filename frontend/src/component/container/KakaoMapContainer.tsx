import KakaoMap from 'component/basic/KakaoMap/Maps';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { gpsSelector } from 'redux/gps';

const KakaoMapContainer = (): JSX.Element => {
    const curGps = useSelector(gpsSelector);
    useEffect(() => {}, []);

    return <KakaoMap gpsInfo={curGps} onClickMarker={() => {}} onClickPosReset={() => {}} />;
};

export default KakaoMapContainer;
