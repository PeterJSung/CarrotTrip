import { ComponentMeta } from '@storybook/react';

import DetailMBTI from './DetailMBTI';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/DetailMBTI',
    component: DetailMBTI,
} as ComponentMeta<typeof DetailMBTI>;

export const detailMBTI = () => <DetailMBTI mbtiArr={[]} />;
