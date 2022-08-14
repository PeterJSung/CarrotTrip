import { ComponentMeta, ComponentStory } from '@storybook/react';

import BannerSuggestionItem from './BannerSuggestionItem';

export default {
    title: 'Basic/BottomSheet/BannerSuggestionItem',
    component: BannerSuggestionItem,
} as ComponentMeta<typeof BannerSuggestionItem>;

const bannerSuggestionItemTemplate: ComponentStory<typeof BannerSuggestionItem> = (props) => (
    <BannerSuggestionItem {...props} />
);

export const bannerSuggestion12R = bannerSuggestionItemTemplate.bind({});
bannerSuggestion12R.args = {
    contentTypeId: 12,
    description: 'Description Test',
    placeName: 'Place Name',
    src: 'https://picsum.photos/800',
    rating: 3.75,
};

export const bannerSuggestion12NR = bannerSuggestionItemTemplate.bind({});
bannerSuggestion12NR.args = {
    contentTypeId: 12,
    description: 'Description Test',
    placeName: 'Place Name',
    rating: 3.75,
};

export const bannerSuggestion14R = bannerSuggestionItemTemplate.bind({});
bannerSuggestion14R.args = {
    contentTypeId: 14,
    description: 'Description Test',
    src: 'https://picsum.photos/800',
    placeName: 'Place Name',
    rating: 3.75,
};

export const bannerSuggestion14NR = bannerSuggestionItemTemplate.bind({});
bannerSuggestion14NR.args = {
    contentTypeId: 14,
    description: 'Description Test',
    placeName: 'Place Name',
    rating: 3.75,
};
