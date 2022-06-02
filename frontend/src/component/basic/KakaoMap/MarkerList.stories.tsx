import { ComponentMeta } from '@storybook/react';
import KakaoMapMarkerList from './MarkerList';
import { actions } from '@storybook/addon-actions';
import { Map } from "react-kakao-maps-sdk";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/MarkerList',
    component: KakaoMapMarkerList,
} as ComponentMeta<typeof KakaoMapMarkerList>;
const defaultLat = 37.5666805
const defaultLng = 126.9784147
export const kakaoMapMarkerList = () => (
    <Map center={{ lat: defaultLat, lng: defaultLng }} style={{ width: "100%", height: "350px" }}>
        <KakaoMapMarkerList onClick={actions} markers={[{
            id: 1,
            lat: defaultLat,
            lng: defaultLng,
            src: 'test'
        }]} />
    </Map>);