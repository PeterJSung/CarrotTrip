import { Box } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import { useTranslation } from 'react-i18next';

import MyBubbleChart, { generationDetailInfo } from './BubbleChart';
import { getImpressionSpecificData } from './detailCommon';

type InputPropOverrides = {
    itemCount: number;
};

export default {
    title: 'Basic/Detail/BubbleChart',
    component: MyBubbleChart,
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
} as ComponentMeta<typeof MyBubbleChart>;

type Args = React.ComponentProps<typeof MyBubbleChart> & InputPropOverrides;

export const BubbleChart: Story<Args> = ({ itemCount }) => {
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
            <MyBubbleChart bubblesData={generationDetailInfo(dat)} width={375} height={280} />
        </Box>
    );
};
