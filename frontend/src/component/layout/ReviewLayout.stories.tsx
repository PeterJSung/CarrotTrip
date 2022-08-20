import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/placeInfo';
import { dummyPlaceStore, getDummyStateWithMock } from 'stories/common.stories';
import ReviewLayout from './ReviewLayout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/ReviewLayout',
    component: ReviewLayout,
    decorators: [
        (story) =>
            getDummyStateWithMock(story(), {
                placeInfo: generateReducer(dummyPlaceStore),
            }),
    ],
} as ComponentMeta<typeof ReviewLayout>;

export const reviewLayout = () => (
    <ReviewLayout
        contentId={100}
        contentTypeId={12}
        onRatingChange={action('Rating Change')}
        onTextChange={action('Text Change')}
        placeName={'Name'}
        rating={0}
        reviewText={'Review Text'}
    />
);
