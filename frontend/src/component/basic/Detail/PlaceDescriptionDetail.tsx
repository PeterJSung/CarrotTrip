import { Box } from '@mui/material';
import PlaceInfoChip from '../common/PlaceInfoChip';
import { bigHeadText, descriptionText } from './detailCommon';

// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx

export interface PlaceDescriptionDetailProps {
    placeType: string;
    placeName: string;
    placeDesc: string;
}

const PlaceDescriptionDetail = (props: PlaceDescriptionDetailProps): JSX.Element => {
    return (
        <Box display="flex" flexDirection="column">
            <PlaceInfoChip label={props.placeType} />
            {bigHeadText(props.placeName)}
            {descriptionText(props.placeName)}
        </Box>
    );
};

export default PlaceDescriptionDetail;
