import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import LoginPage from './LoginPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/LoginPage',
    component: LoginPage,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof LoginPage>;

export const loginPage = () => <LoginPage />;
