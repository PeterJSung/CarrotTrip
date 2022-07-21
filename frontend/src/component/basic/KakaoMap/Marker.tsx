import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export interface MarkerProps {
    isSelect: boolean;
    lat: number;
    lng: number;
    contentId: number;
    contentTypeId: number;
    src?: number;
    onClick: (id: any) => void;
}

const BorderMarker = styled(MapMarker)`
    background-color: red !important;
    width: 500px !important;
    & > img {
        box-sizing: border-box;
        border: 2px solid #191919;
        border-radius: 50%;
    }
`;

const Marker = (props: MarkerProps): JSX.Element => {
    return (
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
            // 커스텀 오버레이가 표시될 위치입니다
            position={{
                lat: props.lat,
                lng: props.lng,
            }}
            clickable={true}
        >
            {/* 커스텀 오버레이에 표시할 내용입니다 */}
            <div
                onClick={props.onClick}
                className="label"
                style={{
                    backgroundColor: 'red',
                    zIndex: 5,
                    color: 'white',
                }}
            >
                <span className="left"></span>
                <span className="center">카카오!</span>
                <span className="right"></span>
            </div>
        </CustomOverlayMap>
    );
};

export default Marker;
