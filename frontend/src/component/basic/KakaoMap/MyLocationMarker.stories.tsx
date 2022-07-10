import { ComponentMeta } from '@storybook/react';
import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';
import { Map } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/MyLocationMarker',
    component: MyLocationMarker,
} as ComponentMeta<typeof MyLocationMarker>;

export const myLocationMarker = () => (
    <Map
        style={{
            height: 500,
        }}
        center={{
            lat: DEFAULT_LAT,
            lng: DEFAULT_LNG,
        }}
    >
        <MyLocationMarker lat={DEFAULT_LAT} lng={DEFAULT_LNG} />
    </Map>
);
