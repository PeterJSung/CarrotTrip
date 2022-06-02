import { Map, MapMarker } from "react-kakao-maps-sdk";

export interface KaKaoMapProps {
    lat?: number
    lng?: number
}

const KakaoMap = (props: KaKaoMapProps): JSX.Element => {
    const lat = props.lat ?? 37.5666805
    const lng = props.lng ?? 126.9784147
    return (
        <Map center={{ lat, lng }} style={{ width: "100%", height: "100%" }}>
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
        </Map>);
};

export default KakaoMap;
