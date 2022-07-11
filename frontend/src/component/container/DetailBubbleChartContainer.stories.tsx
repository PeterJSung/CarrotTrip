import { ComponentMeta } from '@storybook/react';

import DetailBubbleChartContainer from './DetailBubbleChartContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/DetailBubbleChartContainer',
    component: DetailBubbleChartContainer,
} as ComponentMeta<typeof DetailBubbleChartContainer>;

export const detailBubbleChartContainer = () => <DetailBubbleChartContainer />;
