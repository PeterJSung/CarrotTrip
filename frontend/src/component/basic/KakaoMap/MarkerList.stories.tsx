import { ComponentMeta } from '@storybook/react';
import KakaoMapMarkerList from './MarkerList';
import { action } from '@storybook/addon-actions';
import { Map } from 'react-kakao-maps-sdk';
import { PropsWithChildren } from 'react';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/Kakaomapmarkerlist',
    component: KakaoMapMarkerList
} as ComponentMeta<typeof KakaoMapMarkerList>;
const defaultLat = 37.5666805;
const defaultLng = 126.9784147;

const DefaultMap = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Map
            center={{ lat: defaultLat, lng: defaultLng }}
            style={{ width: '100%', height: '350px' }}
        >
            {props.children}
        </Map>
    );
};

export const kakaomapmarkerlist = () => {
    return (
        <DefaultMap>
            <KakaoMapMarkerList
                onClick={action('Kakao map marker Click')}
                markers={[
                    {
                        id: 1,
                        lat: defaultLat,
                        lng: defaultLng,
                        src: 'test'
                    },
                    {
                        id: 2,
                        lat: defaultLat + 0.01,
                        lng: defaultLng + 0.01,
                        src: 'test2'
                    }
                ]}
            />
        </DefaultMap>
    );
};
