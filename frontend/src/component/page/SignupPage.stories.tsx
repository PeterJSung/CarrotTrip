import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState, mockGetEvaluationArea, mockGetUserExist } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import SignupPage from './SignupPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/SignupPage',
    component: SignupPage,
    decorators: [(story) => getDummyState(dummyRouter(story())), WithMock],
} as ComponentMeta<typeof SignupPage>;

export const signupPage = () => <SignupPage />;
signupPage.parameters = {
    mockData: [mockGetUserExist, mockGetEvaluationArea],
};
