import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import SignupPage from './SignupPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/SignupPage',
    component: SignupPage,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof SignupPage>;

export const signupPage = () => <SignupPage />;
