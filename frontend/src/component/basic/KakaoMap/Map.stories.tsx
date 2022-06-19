import { Box, Typography } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, Story } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { DEFAULT_GPS } from 'vo/gps';
import KakaoMap from './Maps';

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
        storyBookLat: getGeoArgs('위도', DEFAULT_GPS.lat),
        storyBookLng: getGeoArgs('경도', DEFAULT_GPS.lng),
    },
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
