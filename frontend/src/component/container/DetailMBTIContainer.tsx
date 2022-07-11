import { Box } from '@mui/material';
import { smallHeadText } from 'component/basic/Detail/detailCommon';

const DetailMBTIContainer = (): JSX.Element => {
    return (
        <Box display="flex" flexDirection="column">
            {smallHeadText('{사용자 MBTI} 86%가 북마크한 장소에요.')}
            <Box position="relative">
                <div>AAA</div>
            </Box>
        </Box>
    );
};

export default DetailMBTIContainer;
