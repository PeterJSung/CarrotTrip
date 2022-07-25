import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { mockGetDataRecommandList } from 'stories/common.stories';

import RecommandCourseList from './RecommandCourseList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/BottomSheet/RecommandCourseList',
    component: RecommandCourseList,
} as ComponentMeta<typeof RecommandCourseList>;

export const recommandCourseList = () => (
    <RecommandCourseList
        selectedIdx={0}
        dataSet={mockGetDataRecommandList}
        onListClick={action('List Click')}
        onTourAreaClick={action('Area Click')}
    />
);
