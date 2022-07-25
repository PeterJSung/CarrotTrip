import { Chip, ChipProps } from '@mui/material';
import styled from 'styled-components';

const ChipComponent = styled(Chip)`
    width: 3rem !important;
    border-radius: 0.25rem !important;
    margin-bottom: 0.375rem;
`;

const PlaceInfoChip = (props: Omit<ChipProps, 'variant' | 'size'>): JSX.Element => {
    return <ChipComponent variant="filled" size="small" {...props} />;
};

export default PlaceInfoChip;
