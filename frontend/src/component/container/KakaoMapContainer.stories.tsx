import { ComponentMeta } from '@storybook/react';
import { getDummyState, mockGetTourNaviInfo } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import KakaoMapContainer from './KakaoMapContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/KakaoMapContainer',
    component: KakaoMapContainer,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof KakaoMapContainer>;

export const kakaoMapContainer = () => <KakaoMapContainer />;
kakaoMapContainer.parameters = {
    mockData: [mockGetTourNaviInfo],
};
