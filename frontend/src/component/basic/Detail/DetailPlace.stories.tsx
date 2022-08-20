import { ComponentMeta } from '@storybook/react';
import { mockGetReviewList } from 'stories/common.stories';
import DetailPlace from './DetailPlace';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/DetailPlace',
    component: DetailPlace,
} as ComponentMeta<typeof DetailPlace>;

export const detailPlace = () => (
    <DetailPlace
        contentId={100}
        userName="정민"
        src="https://picsum.photos/800"
        comments={mockGetReviewList}
        address="testAddress"
        description="testDesc"
        mbtiArr={[]}
        moodArr={['1', '4', '6', '8', '9', '13']}
        name="testName"
        type={12}
    />
);
