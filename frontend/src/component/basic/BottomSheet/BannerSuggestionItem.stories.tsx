import { ComponentMeta, ComponentStory } from '@storybook/react';

import BannerSuggestionItem from './BannerSuggestionItem';

export default {
    title: 'Basic/BottomSheet/BannerSuggestionItem',
    component: BannerSuggestionItem,
} as ComponentMeta<typeof BannerSuggestionItem>;

const bannerSuggestionItemTemplate: ComponentStory<typeof BannerSuggestionItem> = (props) => (
    <BannerSuggestionItem {...props} />
);

export const bannerSuggestionItem = bannerSuggestionItemTemplate.bind({});
bannerSuggestionItem.args = {
    description: 'Description Test',
    placeName: 'Place Name',
    src: 'https://picsum.photos/800',
    rating: 3.75,
};
