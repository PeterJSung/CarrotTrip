import { Chip } from '@mui/material';
import styled from 'styled-components';
import { SelectChipVO } from './signupconstants';

export type SelectChipProps = {
    onClick: (id: number) => void;
} & SelectChipVO;

const ChipBase = styled(Chip)`
    margin-right: 0.5rem !important;
    margin-bottom: 1rem !important;
`;

const CheckedChip = styled(ChipBase)`
    background-color: #fef32f !important;
    color: #191919 !important;
`;

const UnCheckedChip = styled(ChipBase)`
    background-color: #f3f5f7 !important;
    color: #6d6d6d !important;
`;

const SelectChip = (props: SelectChipProps): JSX.Element => {
    const SelectRender = props.checked ? CheckedChip : UnCheckedChip;
    return (
        <SelectRender variant="filled" size="small" label={props.title} clickable onClick={() => props.onClick(1)} />
    );
};

export default SelectChip;
