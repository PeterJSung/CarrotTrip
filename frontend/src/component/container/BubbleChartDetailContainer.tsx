import { Box } from '@mui/material';
import { smallHeadText } from 'component/basic/Detail/detailCommon';

const BubbleChartDetailContainer = (): JSX.Element => {
    return (
        <Box display="flex" flexDirection="column">
            {smallHeadText('test')}
        </Box>
    );
};

export default BubbleChartDetailContainer;
