import { Box } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import IndicatorDetailPlace from './IndicatorDetailPlace';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/IndicatorDetailPlace',
    component: IndicatorDetailPlace,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof IndicatorDetailPlace>;

export const indicatorDetailPlace = () => (
    <Box height="300px" bgcolor="cyan">
        <IndicatorDetailPlace />
    </Box>
);
