import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';

import DetailBackBtn from './DetailBackBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/DetailBackBtn',
    component: DetailBackBtn,
} as ComponentMeta<typeof DetailBackBtn>;

export const detailBackBtn = () => <DetailBackBtn onClick={action('DetailPlaceBackBtn Click')} />;
