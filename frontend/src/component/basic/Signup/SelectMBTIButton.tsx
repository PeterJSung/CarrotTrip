import { ButtonBase, Typography } from '@mui/material';
import { BLACK_COLOR, GRAY_COLOR, WHITE_COLOR, YELLOW_COLOR } from 'globaltheme';
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
    background-color: ${YELLOW_COLOR} !important;
`;

const UnCheckedBtn = styled(MBTIBase)`
    background-color: ${WHITE_COLOR} !important;
`;

const CheckedText = styled(Typography)`
    color: ${BLACK_COLOR} !important;
`;

const UnCheckedText = styled(Typography)`
    color: ${GRAY_COLOR} !important;
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
