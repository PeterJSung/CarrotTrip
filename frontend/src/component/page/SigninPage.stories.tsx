import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState } from '../../stories/common.stories';
import SigninPage from './SigninPage';

export default {
    title: 'Page/SigninPage',
    component: SigninPage,
    decorators: [(story) => getDummyState(dummyRouter(story()))],
} as ComponentMeta<typeof SigninPage>;

export const signinPage = () => <SigninPage />;
