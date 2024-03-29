import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/placeInfo';
import { dummyPlaceStore, dummyRouter, getDummyStateWithMock } from '../../stories/common.stories';
import ReviewPage from './ReviewPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/ReviewPage',
    component: ReviewPage,
    decorators: [
        (story) =>
            getDummyStateWithMock(dummyRouter(story()), {
                placeInfo: generateReducer(dummyPlaceStore),
            }),
    ],
} as ComponentMeta<typeof ReviewPage>;

export const reviewPage = () => <ReviewPage />;
