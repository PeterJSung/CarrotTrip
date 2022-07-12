import { Chip, ChipProps } from '@mui/material';
import styled from 'styled-components';

const ChipComponent = styled(Chip)`
    width: 3rem;
    margin-bottom: 0.375rem;
`;

const PlaceInfoChip = (props: Omit<ChipProps, 'variant' | 'size'>): JSX.Element => {
    return <ChipComponent variant="filled" size="small" {...props} />;
};

export default PlaceInfoChip;
