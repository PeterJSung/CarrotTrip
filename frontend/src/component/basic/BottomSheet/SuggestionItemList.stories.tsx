import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { mockGetDataItemList } from 'stories/common.stories';
import SuggestionItemList from './SuggestionItemList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/BottomSheet/SuggestionItemList',
    component: SuggestionItemList,
} as ComponentMeta<typeof SuggestionItemList>;

export const suggestionItemList = () => (
    <SuggestionItemList selectedIdx={18} dataSet={mockGetDataItemList[12] as any} onListClick={action('List Click')} />
);
