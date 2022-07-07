import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import SignupLoadingPage from './SignupLoadingPage';
import SignupPage from './SignupPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/SignupLoadingPage',
    component: SignupLoadingPage,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof SignupPage>;

export const signupLoadingPage = () => <SignupLoadingPage />;
