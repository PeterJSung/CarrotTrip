import { ComponentMeta } from '@storybook/react';
import { mockGetReviewList, mockGetReviewSingle } from 'stories/common.stories';
import PlaceDetailReviewList from './PlaceDetailReviewList';

export default {
    title: 'Basic/Detail/PlaceDetailReviewList',
    component: PlaceDetailReviewList,
} as ComponentMeta<typeof PlaceDetailReviewList>;

export const myComment = () => (
    <PlaceDetailReviewList placeName="Place Name" myComment={mockGetReviewSingle} remainComment={mockGetReviewList} />
);

export const nonMyComment = () => <PlaceDetailReviewList placeName="Place Name" remainComment={mockGetReviewList} />;
