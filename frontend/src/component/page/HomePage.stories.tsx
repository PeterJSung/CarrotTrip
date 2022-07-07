import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import HomePage from './HomePage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/HomePage',
    component: HomePage,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof HomePage>;

export const homePage = () => <HomePage />;
