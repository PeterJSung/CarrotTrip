import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/userInfo';
import { getDummyStateWithMock, mockGetTourlist } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import HomePage from './HomePage';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/HomePage',
    component: HomePage,
    decorators: [
        (story) =>
            getDummyStateWithMock(story(), {
                userInfo: generateReducer({
                    data: {
                        isLogin: true,
                        mbti: 'ITNJ',
                        name: 'test',
                    },
                }),
            }),
        WithMock,
    ],
} as ComponentMeta<typeof HomePage>;

export const homePage = () => <HomePage />;
homePage.parameters = {
    mockData: [mockGetTourlist],
};
