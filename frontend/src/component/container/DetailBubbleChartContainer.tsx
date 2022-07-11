import { Box } from '@mui/material';
import BubbleChart, { generationDetailInfo } from 'component/basic/Detail/BubbleChart';
import { getImpressionSpecificData, smallHeadText } from 'component/basic/Detail/detailCommon';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MINIMUM_HEIGHT = 20;

const DetailBubbleChartContainer = (): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<{ w: number; h: number }>({
        h: 0,
        w: 0,
    });
    const { t } = useTranslation();
    const dat = getImpressionSpecificData(t, [1, 7, 3, 4, 5, 6, 7]);

    useEffect(() => {
        if (ref.current) {
            setSize({
                w: ref.current.clientWidth,
                h: ref.current.clientHeight,
            });
        }
    }, [ref.current]);
    return (
        <Box display="flex" flexDirection="column">
            {smallHeadText('분위기')}
            <Box ref={ref} width="100%" minHeight={`${MINIMUM_HEIGHT}rem`}>
                <BubbleChart bubblesData={generationDetailInfo(dat)} width={size.w} height={size.h} />
            </Box>
        </Box>
    );
};

export default DetailBubbleChartContainer;
