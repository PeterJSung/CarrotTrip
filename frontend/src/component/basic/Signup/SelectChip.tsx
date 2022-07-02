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
    color: #191919 !important;
`;

const UnCheckedChip = styled(ChipBase)`
    color: #6d6d6d !important;
`;

const SelectChip = (props: SelectChipProps): JSX.Element => {
    const SelectRender = props.checked ? CheckedChip : UnCheckedChip;
    return (
        <SelectRender
            color={props.checked ? 'secondary' : 'info'}
            variant="filled"
            size="small"
            label={props.title}
            clickable
            onClick={() => props.onClick(props.code)}
        />
    );
};

export default SelectChip;
