import { Box } from '@mui/material';
import PlaceInfoChip from '../common/PlaceInfoChip';
import { bigHeadText } from './detailCommon';
// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx
import ClampLines from 'react-clamp-lines';
import styled from 'styled-components';
export interface PlaceDescriptionDetailProps {
    placeType: string;
    placeName: string;
    placeDesc: string;
}

const ReadMoreTextCompo = styled(ClampLines)`
    & > .clamp-lines__button {
        background: none;
        border: 0;
        color: #305494;
        padding: 0;
    }
`;

const PlaceDescriptionDetail = (props: PlaceDescriptionDetailProps): JSX.Element => {
    return (
        <Box display="flex" flexDirection="column">
            <PlaceInfoChip label={props.placeType} />
            {bigHeadText(props.placeName)}
            <ReadMoreTextCompo id="clamplinesid" text={props.placeDesc} lines={4} />
        </Box>
    );
};

export default PlaceDescriptionDetail;
