import { ComponentMeta } from '@storybook/react';
import KakaoMapMarkerList from './MarkerList';
import { actions } from '@storybook/addon-actions';
import { Map } from "react-kakao-maps-sdk";
import { PropsWithChildren } from 'react';
import KakaoMapNowLocationBtn from './NowLocationBtn';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/Kakaomapnowlocationbtn',
    component: KakaoMapNowLocationBtn,
} as ComponentMeta<typeof KakaoMapNowLocationBtn>;

export const kakaomapnowlocationbtn = () => <KakaoMapNowLocationBtn />;