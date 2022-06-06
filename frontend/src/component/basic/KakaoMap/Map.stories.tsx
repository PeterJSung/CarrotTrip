import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action, actions } from '@storybook/addon-actions';
import KakaoMap, { KaKaoMapProps } from './Maps';
import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const defaultSize: number = 350;

const getGeoArgs = (name: string, defaultValue: number) => ({
    control: 'number',
    type: 'number',
    name,
    defaultValue
});

export default {
    title: 'Basic/KakaoMap/Kakaomap',
    component: KakaoMap,
    argTypes: {
        lat: getGeoArgs('latitude', 37.5666805),
        lng: getGeoArgs('longitude', 126.9784147)
    }
} as ComponentMeta<typeof KakaoMap>;

const DefaultContainer = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Box
            width={`${defaultSize}px`}
            height={`${defaultSize}px`}
            position="relative"
        >
            {props.children}
            <Typography>The Map Size is {`${defaultSize}px`}</Typography>
        </Box>
    );
};

const kakaomapTemplate: ComponentStory<typeof KakaoMap> = (
    props: KaKaoMapProps
) => (
    <DefaultContainer>
        <KakaoMap {...props} />
    </DefaultContainer>
);
export const kakaomap = kakaomapTemplate.bind({});
kakaomap.args = {
    onClickPosReset: action('Reset Pos Click')
};
