import { ComponentMeta } from '@storybook/react';
import { generateReducer } from 'redux/placeInfo';
import { dummyPlaceStore, getDummyStateWithMock } from 'stories/common.stories';
import DetailPlaceLayout from './DetailPlaceLayout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/DetailPlaceLayout',
    component: DetailPlaceLayout,
    decorators: [
        (story) =>
            getDummyStateWithMock(story(), {
                placeInfo: generateReducer(dummyPlaceStore),
            }),
    ],
} as ComponentMeta<typeof DetailPlaceLayout>;

export const detailPlaceLayout = () => <DetailPlaceLayout />;
