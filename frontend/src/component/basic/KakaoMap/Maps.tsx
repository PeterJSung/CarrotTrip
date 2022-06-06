import { Map, ZoomControl } from "react-kakao-maps-sdk";
import KakaoMapMarkerList, { MarkerInfo } from "./MarkerList";

export interface KaKaoMapProps {
    lat?: number
    lng?: number
}

const KakaoMap = (props: KaKaoMapProps): JSX.Element => {
    const lat = props.lat ?? 37.5666805
    const lng = props.lng ?? 126.9784147
    const onClick = () => {

    }
    const markers: MarkerInfo[] = []
    return (
        <>
            <Map center={{ lat, lng }} style={{ width: "100%", height: "100%" }}>
                <KakaoMapMarkerList onClick={onClick} markers={markers} />
            </Map>
        </>);
};

export default KakaoMap;
