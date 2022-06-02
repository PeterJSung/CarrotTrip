import { Map, MapMarker } from "react-kakao-maps-sdk";

export interface KakaoMapMarkerListProps {
    markers: MarkerInfo[]
    onClick: (id: string) => void
}

export interface MarkerInfo {
    lat: number
    lng: number
    src: string
    id: number
}

const KakaoMapMarkerList = (props: KakaoMapMarkerListProps): JSX.Element => {

    return (
        <>
            {
                props.markers.map((eachMarker) => {
                    <MapMarker key={eachMarker.id} position={{ lat: eachMarker.lat, lng: eachMarker.lng }}>
                        <div style={{ color: "#000" }}>Hello World!</div>
                    </MapMarker>
                })
            }
        </>
    );
};

export default KakaoMapMarkerList;
