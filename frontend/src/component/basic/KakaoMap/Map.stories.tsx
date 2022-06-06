import { ComponentMeta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import KakaoMap, { KaKaoMapProps } from './Maps';
import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';


const defaultSize: number = 350

const getLatArgs = (name: string, defaultValue: number) => ({
    control: 'number',
    type: 'number',
    name,
    defaultValue
})

export default {
    title: 'Basic/KakaoMap/Kakaomap',
    component: KakaoMap,
    argTypes: {
        lat: getLatArgs('latitude', 37.5666805),
        lng: getLatArgs('longitude', 126.9784147)
    }
} as ComponentMeta<typeof KakaoMap>;

const DefaultContainer = (props: PropsWithChildren<any>): JSX.Element => {
    return (<Box width={`${defaultSize}px`} height={`${defaultSize}px`}>
        {props.children}
        <Typography>The Map Size is {`${defaultSize}px`}</Typography>
    </Box>)
}

const kakaomapTemplate = (props: KaKaoMapProps) => <DefaultContainer><KakaoMap {...props} /></DefaultContainer>
export const kakaomap = kakaomapTemplate.bind({});

