import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import SignupOnBoard5Layout from './SignupOnBoard5Layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/SignupOnBoard5Layout',
    component: SignupOnBoard5Layout,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof SignupOnBoard5Layout>;

export const signupOnBoard5Layout = () => <SignupOnBoard5Layout />;
