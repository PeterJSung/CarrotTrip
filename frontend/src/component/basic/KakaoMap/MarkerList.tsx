import { Map, MapMarker } from 'react-kakao-maps-sdk';

export interface KakaoMapMarkerListProps {
    markers: MarkerInfo[];
    onClick: (id: number) => void;
}

export interface MarkerInfo {
    lat: number;
    lng: number;
    src: string;
    id: number;
}

const KakaoMapMarkerList = (props: KakaoMapMarkerListProps): JSX.Element => {
    return (
        <>
            {props.markers.map((eachMarker) => {
                return (
                    <MapMarker
                        key={eachMarker.id}
                        position={{ lat: eachMarker.lat, lng: eachMarker.lng }}
                        onClick={() => props.onClick(eachMarker.id)}
                    ></MapMarker>
                );
            })}
        </>
    );
};

export default KakaoMapMarkerList;
