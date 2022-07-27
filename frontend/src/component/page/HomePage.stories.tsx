import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/userInfo';
import {
    getDummyStateWithMock,
    mockGetBookmarkList,
    mockGetPlaceDetail,
    mockGetTourlist,
} from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import HomePage from './HomePage';

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
    mockData: [mockGetTourlist, mockGetBookmarkList, mockGetPlaceDetail],
};
