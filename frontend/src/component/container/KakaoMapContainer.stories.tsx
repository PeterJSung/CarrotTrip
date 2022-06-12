import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import KakaoMapContainer from './KakaoMapContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/KakaoMapContainer',
    component: KakaoMapContainer,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof KakaoMapContainer>;

export const kakaoMapContainer = () => <KakaoMapContainer />;
