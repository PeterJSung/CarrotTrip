import { Box } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import IndicatorMapRegion from './IndicatorMapRegion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/IndicatorMapRegion',
    component: IndicatorMapRegion,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof IndicatorMapRegion>;

export const indicatorMapRegion = () => (
    <Box height="300px" bgcolor="cyan">
        <IndicatorMapRegion />
    </Box>
);
