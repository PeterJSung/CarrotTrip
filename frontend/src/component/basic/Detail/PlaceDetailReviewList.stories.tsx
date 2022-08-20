import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { mockGetReviewList, mockGetReviewSingle } from 'stories/common.stories';
import PlaceDetailReviewList from './PlaceDetailReviewList';

export default {
    title: 'Basic/Detail/PlaceDetailReviewList',
    component: PlaceDetailReviewList,
} as ComponentMeta<typeof PlaceDetailReviewList>;

export const myComment = () => (
    <PlaceDetailReviewList
        onReveiwDelete={action('Review Delete')}
        onReveiwCreate={action('Reveiw Create')}
        placeName="Place Name"
        myComment={mockGetReviewSingle}
        remainComment={mockGetReviewList}
    />
);

export const nonMyComment = () => (
    <PlaceDetailReviewList
        onReveiwDelete={action('Review Delete')}
        onReveiwCreate={action('Reveiw Create')}
        placeName="Place Name"
        remainComment={mockGetReviewList}
    />
);
