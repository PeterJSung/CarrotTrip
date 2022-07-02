import { ComponentMeta } from '@storybook/react';
import { ID_EXIST_URL } from 'api/idretrieve';
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
            url: ID_EXIST_URL,
            method: 'GET',
            status: 200,
            response: {
                data: false,
            },
        },
    ],
};