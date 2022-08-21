import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState } from '../../stories/common.stories';
import EditTastePage from './EditTastePage';

export default {
    title: 'Page/EditTastePage',
    component: EditTastePage,
    decorators: [(story) => getDummyState(dummyRouter(story()))],
} as ComponentMeta<typeof EditTastePage>;

export const editTastePage = () => <EditTastePage />;
