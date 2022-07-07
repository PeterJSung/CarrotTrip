import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState } from '../../stories/common.stories';
import SignupLoadingPage from './SignupLoadingPage';
import SignupPage from './SignupPage';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/SignupLoadingPage',
    component: SignupLoadingPage,
    decorators: [(story) => getDummyState(dummyRouter(story()))],
} as ComponentMeta<typeof SignupPage>;

export const signupLoadingPage = () => <SignupLoadingPage />;
