import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';
import { cloneDeep } from 'lodash';
import { PropsWithChildren } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { specializeContentId } from 'vo/travelInfo';
import Marker from './Marker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/Marker',
    component: Marker,
} as ComponentMeta<typeof Marker>;

const selectedArr = [false, true];
const contentIdArr = cloneDeep(specializeContentId).concat([14]);

const generateLatLng = (idx: number) => {
    const diff = 0.001;
    const lineCount = 4;
    const defaultLng = DEFAULT_LNG + diff * (idx % lineCount);
    const defaultLat = DEFAULT_LAT + diff * Math.floor(idx / lineCount);
    return [defaultLng, defaultLat];
};

const DefaultMap = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Map center={{ lat: DEFAULT_LAT, lng: DEFAULT_LNG }} style={{ width: '100%', height: '350px' }}>
            {props.children}
        </Map>
    );
};

export const nonSrcMarker = () => {
    let idx = 0;
    return (
        <DefaultMap>
            {selectedArr.map((eachSelected, i) => {
                return contentIdArr.map((eachContentId, i2) => {
                    const [lng, lat] = generateLatLng(idx);
                    idx++;
                    return (
                        <Marker
                            key={`${i}-${i2}-${eachSelected}`}
                            isSelect={eachSelected}
                            contentId={1}
                            contentTypeId={eachContentId}
                            lat={lat}
                            lng={lng}
                            onClick={action(`Marker Click ${eachSelected}`)}
                        />
                    );
                });
            })}
        </DefaultMap>
    );
};

export const srcMarker = () => {
    let idx = 0;
    return (
        <DefaultMap>
            {selectedArr.map((eachSelected, i) => {
                const [lng, lat] = generateLatLng(idx);
                idx++;
                return (
                    <Marker
                        key={`${i}-${eachSelected}`}
                        src="https://picsum.photos/800"
                        isSelect={eachSelected}
                        contentId={1}
                        contentTypeId={3}
                        lat={lat}
                        lng={lng}
                        onClick={action(`Marker Click ${eachSelected}`)}
                    />
                );
            })}
        </DefaultMap>
    );
};
