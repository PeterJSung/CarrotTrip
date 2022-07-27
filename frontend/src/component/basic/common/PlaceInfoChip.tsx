import { Chip, ChipProps } from '@mui/material';
import styled from 'styled-components';

const ChipComponent = styled(Chip)`
    width: 3rem !important;
    border-radius: 0.25rem !important;
    margin-bottom: 0.375rem;
    font-family: Noto Sans KR !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 10px !important;
    line-height: 14px !important;
    letter-spacing: -0.05em !important;
    color: #6d6d6d !important;
`;

const PlaceInfoChip = (props: Omit<ChipProps, 'variant' | 'size'>): JSX.Element => {
    return <ChipComponent variant="filled" size="small" {...props} />;
};

export default PlaceInfoChip;
