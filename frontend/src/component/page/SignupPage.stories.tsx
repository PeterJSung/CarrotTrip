import { ComponentMeta } from '@storybook/react';
import { mockGetEvaluationArea } from 'api/evaluationArea';
import { mockGetUserExist } from 'api/idretrieve';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import SignupPage from './SignupPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/SignupPage',
    component: SignupPage,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof SignupPage>;

export const signupPage = () => <SignupPage />;
signupPage.parameters = {
    mockData: [mockGetUserExist, mockGetEvaluationArea],
};
