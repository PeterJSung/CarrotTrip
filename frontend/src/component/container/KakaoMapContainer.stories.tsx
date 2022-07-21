import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/userInfo';
import { getDummyStateWithMock, mockGetTourlist, mockGetTourNaviInfo } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import KakaoMapContainer from './KakaoMapContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/KakaoMapContainer',
    component: KakaoMapContainer,
    decorators: [
        (story) =>
            getDummyStateWithMock(story(), {
                userInfo: generateReducer({
                    data: {
                        isLogin: true,
                        name: 'test',
                    },
                }),
            }),
        WithMock,
    ],
} as ComponentMeta<typeof KakaoMapContainer>;

export const kakaoMapContainer = () => <KakaoMapContainer />;
kakaoMapContainer.parameters = {
    mockData: [mockGetTourNaviInfo, mockGetTourlist],
};
