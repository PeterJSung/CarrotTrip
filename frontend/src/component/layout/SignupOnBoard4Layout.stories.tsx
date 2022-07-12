import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/signupInfo';
import { dummySingupInfoStore, getDummyStateWithMock } from 'stories/common.stories';
import SignupOnBoard4Layout from './SignupOnBoard4Layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/SignupOnBoard4Layout',
    component: SignupOnBoard4Layout,
    decorators: [
        (story) =>
            getDummyStateWithMock(story(), {
                signupInfo: generateReducer(dummySingupInfoStore),
            }),
    ],
} as ComponentMeta<typeof SignupOnBoard4Layout>;

export const signupOnBoard4Layout = () => <SignupOnBoard4Layout />;
