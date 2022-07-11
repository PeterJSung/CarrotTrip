import { Box } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import { useTranslation } from 'react-i18next';

import BubbleChart, { generationDetailInfo } from './BubbleChart';
import { getImpressionSpecificData } from './detailCommon';

type InputPropOverrides = {
    itemCount: number;
};

export default {
    title: 'Basic/Detail/BubbleChart',
    component: BubbleChart,
    argTypes: {
        itemCount: {
            control: 'number',
            type: 'number',
            name: 'Item 개수(1~15 개만 선택가능)',
            defaultValue: 1,
        },
        bubblesData: {
            table: {
                disable: true,
            },
        },
        width: {
            table: {
                disable: true,
            },
        },
        height: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof BubbleChart>;

type Args = React.ComponentProps<typeof BubbleChart> & InputPropOverrides;

export const bubbleChart: Story<Args> = ({ itemCount }) => {
    const { t } = useTranslation();
    const idArr = [];
    if (itemCount >= 15) {
        itemCount = 15;
    } else if (itemCount <= 0) {
        itemCount = 1;
    }
    for (let i = 1; i <= itemCount; i++) {
        idArr.push(i);
    }

    const dat = getImpressionSpecificData(t, idArr);
    return (
        <Box width="100%" height="100%">
            <BubbleChart bubblesData={generationDetailInfo(dat)} width={375} height={280} />
        </Box>
    );
};
