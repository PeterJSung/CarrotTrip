import { Box } from '@mui/material';
import { smallHeadText } from 'component/basic/Detail/detailCommon';
import { useTranslation } from 'react-i18next';
import { PlaceMBTIInfo } from 'vo/placeInfo';
import MBTIChip from './MBTIChip';

export interface DetailMBTIProps {
    mbtiArr: PlaceMBTIInfo[];
}

const DetailMBTI = (props: DetailMBTIProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Box display="flex" flexDirection="column">
            {smallHeadText(t('placeinfo.mookmarktext'))}
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
                {props.mbtiArr.map((d) => (
                    <Box key={d.mbtiStr}>
                        <MBTIChip score={d.score} type={d.mbtiStr} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default DetailMBTI;
