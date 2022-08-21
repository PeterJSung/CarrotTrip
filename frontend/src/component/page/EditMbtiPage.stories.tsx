import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState } from '../../stories/common.stories';
import EditMbtiPage from './EditMbtiPage';

export default {
    title: 'Page/EditMbtiPage',
    component: EditMbtiPage,
    decorators: [(story) => getDummyState(dummyRouter(story()))],
} as ComponentMeta<typeof EditMbtiPage>;

export const editMbtiPage = () => <EditMbtiPage />;
