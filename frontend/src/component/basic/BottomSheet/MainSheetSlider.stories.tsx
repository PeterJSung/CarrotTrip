import { ComponentMeta } from '@storybook/react';

import MainSheetSlider from './MainSheetSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/BottomSheet/MainSheetSlider',
    component: MainSheetSlider,
} as ComponentMeta<typeof MainSheetSlider>;

export const mainSheetSlider = () => <MainSheetSlider />;
