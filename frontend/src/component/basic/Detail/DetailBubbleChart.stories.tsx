import { ComponentMeta } from '@storybook/react';

import DetailBubbleChart from './DetailBubbleChart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/DetailBubbleChart',
    component: DetailBubbleChart,
} as ComponentMeta<typeof DetailBubbleChart>;

export const detailBubbleChart = () => <DetailBubbleChart tasteList={['1', '2', '3', '4', '5', '6', '7', '8', '9']} />;
