import { ComponentMeta } from '@storybook/react';

import BannerRecommandTotal from './BannerRecommandTotal';

export default {
    title: 'Basic/BottomSheet/BannerRecommandTotal',
    component: BannerRecommandTotal,
} as ComponentMeta<typeof BannerRecommandTotal>;

export const bannerRecommandTotal = () => <BannerRecommandTotal distance={9.4} score={3.3} userName="잘생긴사람" />;
