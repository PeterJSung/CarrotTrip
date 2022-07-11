import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import PlaceDetailLayout from './PlaceDetailLayout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/PlaceDetailLayout',
    component: PlaceDetailLayout,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof PlaceDetailLayout>;

export const placeDetailLayout = () => <PlaceDetailLayout />;
