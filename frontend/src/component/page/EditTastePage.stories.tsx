import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/userInfo';
import withMock from 'storybook-addon-mock';
import { dummyUserInfoStore, getDummyStateWithMock } from '../../stories/common.stories';
import EditTastePage from './EditTastePage';

export default {
    title: 'Page/EditTastePage',
    component: EditTastePage,
    decorators: [
        (story) =>
            getDummyStateWithMock(story(), {
                userInfo: generateReducer(dummyUserInfoStore),
            }),
        withMock,
    ],
} as ComponentMeta<typeof EditTastePage>;

export const editTastePage = () => <EditTastePage />;
