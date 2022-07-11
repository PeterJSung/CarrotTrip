import { Box } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import { useTranslation } from 'react-i18next';

import BubbleChart, { generationDetailInfo } from './BubbleChart';
import { getImpressionSpecificData } from './detailCommon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/BubbleChart',
    component: BubbleChart,
} as ComponentMeta<typeof BubbleChart>;

export const bubbleChart = () => {
    const { t } = useTranslation();
    const dat = getImpressionSpecificData(t, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    return (
        <Box width="100%" height="100%">
            <BubbleChart bubblesData={generationDetailInfo(dat)} width={375} height={280} />
        </Box>
    );
};
