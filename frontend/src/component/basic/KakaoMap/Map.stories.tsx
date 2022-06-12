import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import KakaoMap, { KaKaoMapProps } from './Maps';
import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { getDummyState } from 'stories/common.stories';

const defaultSize: number = 350;

type InputPropOverrides = {
    storyBookLat: number;
    storyBookLng: number;
};

const getGeoArgs = (name: string, defaultValue: number) => ({
    control: 'number',
    type: 'number',
    name,
    defaultValue,
});

export default {
    title: 'Basic/KakaoMap/Kakaomap',
    component: KakaoMap,
    argTypes: {
        storyBookLat: getGeoArgs('latitude', 37.5666805),
        storyBookLng: getGeoArgs('longitude', 126.9784147),
    },
    /*
    argTypes: {
        gpsInfo: {
            name: 'Gps Info',
            description: 'it is Gps Info Object Set',
            //lng: getGeoArgs('longitude', 126.9784147),
            //position: { control: 'select', options: ['north', 'south', 'east', 'west'] },
        },
    },
    /*
    argTypes: {
        lat: getGeoArgs('latitude', 37.5666805),
        lng: getGeoArgs('longitude', 126.9784147),
    },*/
} as ComponentMeta<typeof KakaoMap>;

const DefaultContainer = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Box width={`${defaultSize}px`} height={`${defaultSize}px`} position="relative">
            {props.children}
            <Typography>The Map Size is {`${defaultSize}px`}</Typography>
        </Box>
    );
};

type Args = React.ComponentProps<typeof KakaoMap> & InputPropOverrides;
const kakaomapTemplate: Story<Args> = ({ storyBookLat, storyBookLng, ...args }) => {
    args.gpsInfo = {
        lat: storyBookLat,
        lng: storyBookLng,
    };

    return (
        <DefaultContainer>
            <KakaoMap {...args} />
        </DefaultContainer>
    );
};

export const kakaomap = kakaomapTemplate.bind({});
kakaomap.args = {
    onClickPosReset: action('Reset Pos Click'),
};
