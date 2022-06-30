import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import SignupOnBoard1Layout from './SignupOnBoard1Layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/SignupOnBoard1Layout',
    component: SignupOnBoard1Layout,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof SignupOnBoard1Layout>;

export const signupOnBoard1Layout = () => <SignupOnBoard1Layout />;
signupOnBoard1Layout.parameters = {
    mockData: [
        {
            url: URL,
            method: 'GET',
            status: 200,
            response: {
                data: false,
            },
        },
    ],
};
