import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';

import KakaoMapContainer from './KakaoMapContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/KakaoMapContainer',
    component: KakaoMapContainer,
} as ComponentMeta<typeof KakaoMapContainer>;

export const kakaoMapContainer = () => <div />;
