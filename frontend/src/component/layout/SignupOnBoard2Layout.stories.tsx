import { ComponentMeta } from '@storybook/react';
import { mockGetEvaluationArea } from 'api/evaluationArea';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import SignupOnBoard2Layout from './SignupOnBoard2Layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/SignupOnBoard2Layout',
    component: SignupOnBoard2Layout,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof SignupOnBoard2Layout>;

export const signupOnBoard2Layout = () => <SignupOnBoard2Layout />;
signupOnBoard2Layout.parameters = {
    mockData: [mockGetEvaluationArea],
};
