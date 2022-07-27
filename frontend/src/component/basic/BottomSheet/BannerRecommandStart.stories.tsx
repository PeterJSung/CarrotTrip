import { ComponentMeta, ComponentStory } from '@storybook/react';

import BannerRecommandStart from './BannerRecommandStart';

export default {
    title: 'Basic/BottomSheet/BannerRecommandStart',
    component: BannerRecommandStart,
} as ComponentMeta<typeof BannerRecommandStart>;

const bannerRecommandStartTemplate: ComponentStory<typeof BannerRecommandStart> = (props) => (
    <BannerRecommandStart {...props} />
);

export const bannerRecommandStart = bannerRecommandStartTemplate.bind({});
bannerRecommandStart.args = {
    addressText: '서울시 가나다 마바사 아자차 카파하 용인시 가나다 마바사',
};
