import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { descriptionText, smallHeadText } from './detailCommon';

// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx

export interface PlaceAdressDetailProps {
    address: string;
}

const PlaceAdressDetail = (props: PlaceAdressDetailProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Box display="flex" flexDirection="column">
            {smallHeadText(t('placeinfo.address'))}
            {descriptionText(props.address)}
        </Box>
    );
};

export default PlaceAdressDetail;
