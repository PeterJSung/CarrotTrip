import { ComponentMeta } from '@storybook/react';

import RegionDiscription from './RegionDiscription';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/RegionDiscription',
    component: RegionDiscription,
} as ComponentMeta<typeof RegionDiscription>;

export const regionDiscription = () => <RegionDiscription region="Test" />;
