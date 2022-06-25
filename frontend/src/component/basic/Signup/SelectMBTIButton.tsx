import { ButtonBase, Typography } from '@mui/material';
import styled from 'styled-components';
import { MBTI_TYPE } from './signupconstants';

export interface SelectMBTIButtonProps {
    type: MBTI_TYPE;
    checked: boolean;
    onClick: (mbti: MBTI_TYPE) => void;
}

const MBTIBase = styled(ButtonBase)`
    width: 4rem;
    height: 4rem;
    border-radius: 50% !important;
`;

const CheckedBtn = styled(MBTIBase)`
    background-color: #fef32f !important;
`;

const UnCheckedBtn = styled(MBTIBase)`
    background-color: #f3f5f7 !important;
`;

const CheckedText = styled(Typography)`
    color: #191919 !important;
`;

const UnCheckedText = styled(Typography)`
    color: #6d6d6d !important;
`;

const SelectMBTIButton = (props: SelectMBTIButtonProps): JSX.Element => {
    const SelectWrapper = props.checked ? CheckedBtn : UnCheckedBtn;
    const SelectText = props.checked ? CheckedText : UnCheckedText;
    return (
        <SelectWrapper onClick={() => props.onClick(props.type)}>
            <SelectText>{props.type}</SelectText>
        </SelectWrapper>
    );
};

export default SelectMBTIButton;
