import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import KakaoMapMarkerList, { MarkerInfo } from './MarkerList';
import KakaoMapNowLocationBtn from './NowLocationBtn';

export interface KaKaoMapProps {
    lat?: number;
    lng?: number;
    onClickPosReset: () => void;
    onClickMarker: (id: number) => void;
}

const KakaoMap = (props: KaKaoMapProps): JSX.Element => {
    const lat = props.lat ?? 37.5666805;
    const lng = props.lng ?? 126.9784147;
    const onClick = () => {};
    const markers: MarkerInfo[] = [];
    return (
        <>
            <Map
                center={{ lat, lng }}
                style={{ width: '100%', height: '100%' }}
            >
                <KakaoMapMarkerList
                    onClick={props.onClickMarker}
                    markers={markers}
                />
            </Map>
            <KakaoMapNowLocationBtn onClick={props.onClickPosReset} />
        </>
    );
};

export default KakaoMap;
