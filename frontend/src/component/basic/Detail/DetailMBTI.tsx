import { Box } from '@mui/material';
import { smallHeadText } from 'component/basic/Detail/detailCommon';
import { useTranslation } from 'react-i18next';
import { PlaceBookmarkInfo } from 'vo/placeInfo';

export interface DetailMBTIProps {
    mbtiArr: PlaceBookmarkInfo[];
}

const DetailMBTI = (props: DetailMBTIProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Box display="flex" flexDirection="column">
            {smallHeadText(
                t('placeinfo.mookmarktext', {
                    mbti: 'ITNJ',
                    percent: '86',
                }),
            )}
            <Box position="relative">
                <div>AAA</div>
            </Box>
        </Box>
    );
};

export default DetailMBTI;
