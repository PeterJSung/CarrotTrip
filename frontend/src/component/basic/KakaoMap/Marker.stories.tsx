import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';
import { PropsWithChildren } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import Marker from './Marker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/Marker',
    component: Marker,
} as ComponentMeta<typeof Marker>;

const DefaultMap = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Map center={{ lat: DEFAULT_LAT, lng: DEFAULT_LNG }} style={{ width: '100%', height: '350px' }}>
            {props.children}
        </Map>
    );
};

export const marker = () => (
    <DefaultMap>
        <Marker
            isSelect={true}
            contentId={1}
            contentTypeId={3}
            lat={DEFAULT_LAT}
            lng={DEFAULT_LNG}
            onClick={action('Marker Click')}
        />
    </DefaultMap>
);
