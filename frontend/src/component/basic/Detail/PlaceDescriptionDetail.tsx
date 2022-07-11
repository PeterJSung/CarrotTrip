import { Box, Chip } from '@mui/material';
import styled from 'styled-components';
import { bigHeadText, descriptionText } from './detailCommon';

// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx

export interface PlaceDescriptionDetailProps {
    placeType: string;
    placeName: string;
    placeDesc: string;
}

const TypeChip = styled(Chip)`
    width: 3rem;
    margin-bottom: 0.375rem;
`;

const PlaceDescriptionDetail = (props: PlaceDescriptionDetailProps): JSX.Element => {
    return (
        <Box display="flex" flexDirection="column">
            <TypeChip
                variant="filled"
                size="small"
                label={props.placeType}
                style={{
                    width: `3rem`,
                }}
            />
            {bigHeadText(props.placeName)}
            {descriptionText(props.placeName)}
        </Box>
    );
};

export default PlaceDescriptionDetail;
