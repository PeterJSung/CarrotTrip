import { Box } from '@mui/material';
import { descriptionText, smallHeadText } from './detailCommon';

// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx

export interface PlaceAdressDetailProps {
    adressHeaderText: string;
    adressText: string;
}

const PlaceAdressDetail = (props: PlaceAdressDetailProps): JSX.Element => {
    return (
        <Box display="flex" flexDirection="column">
            {smallHeadText(props.adressHeaderText)}
            {descriptionText(props.adressText)}
        </Box>
    );
};

export default PlaceAdressDetail;
