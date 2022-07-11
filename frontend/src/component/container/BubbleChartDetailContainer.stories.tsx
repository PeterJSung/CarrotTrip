import { ComponentMeta } from '@storybook/react';

import BubbleChartDetailContainer from './BubbleChartDetailContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/BubbleChartDetailContainer',
    component: BubbleChartDetailContainer,
} as ComponentMeta<typeof BubbleChartDetailContainer>;

export const bubbleChartDetailContainer = () => <BubbleChartDetailContainer />;
