import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import SignupOnBoard3Layout from './SignupOnBoard3Layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/SignupOnBoard3Layout',
    component: SignupOnBoard3Layout,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof SignupOnBoard3Layout>;

export const signupOnBoard3Layout = () => <SignupOnBoard3Layout />;
