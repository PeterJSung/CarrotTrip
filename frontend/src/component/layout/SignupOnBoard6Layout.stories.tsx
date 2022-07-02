import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import SignupOnBoard6Layout from './SignupOnBoard6Layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/SignupOnBoard6Layout',
    component: SignupOnBoard6Layout,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof SignupOnBoard6Layout>;

export const signupOnBoard6Layout = () => <SignupOnBoard6Layout />;
