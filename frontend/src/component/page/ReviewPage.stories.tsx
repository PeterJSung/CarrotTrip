import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState } from '../../stories/common.stories';
import ReviewPage from './ReviewPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/ReviewPage',
    component: ReviewPage,
    decorators: [(story) => getDummyState(dummyRouter(story()))],
} as ComponentMeta<typeof ReviewPage>;

export const reviewPage = () => <ReviewPage />;
