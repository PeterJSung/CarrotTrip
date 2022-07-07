import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState } from '../../stories/common.stories';
import LoginPage from './LoginPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/LoginPage',
    component: LoginPage,
    decorators: [(story) => getDummyState(dummyRouter(story()))],
} as ComponentMeta<typeof LoginPage>;

export const loginPage = () => <LoginPage />;
