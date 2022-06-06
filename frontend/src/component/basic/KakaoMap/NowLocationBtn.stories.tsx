import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';

import KakaoMapNowLocationBtn from './NowLocationBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/Kakaomapnowlocationbtn',
    component: KakaoMapNowLocationBtn
} as ComponentMeta<typeof KakaoMapNowLocationBtn>;

export const kakaomapnowlocationbtn = () => (
    <KakaoMapNowLocationBtn onClick={action('kakaomapnowlocationbtn click')} />
);
