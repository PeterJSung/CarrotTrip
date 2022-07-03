import { Box, ButtonBase, Typography } from '@mui/material';
import styled from 'styled-components';
import BlackPanel from '../common/BlackPanel';
import Checker from '../common/Checker';
import { SelectBoxVO } from './signupconstants';

export type SelectSquareBoxProps = {
    onClick: (id: number) => void;
} & SelectBoxVO;

const ButtonWrapper = styled(ButtonBase)`
    position: relative !important;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem !important;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
`;

const TextTypo = styled(Typography)`
    position: absolute;
    left: 0.3rem;
    bottom: 0.2rem;
    color: white;
    z-index: 3;
`;

const CheckedWrapper = styled(Box)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 4;
`;

const SelectSquareBox = (props: SelectSquareBoxProps): JSX.Element => {
    return (
        <ButtonWrapper
            style={{
                backgroundImage: `url(${props.src})`,
            }}
            onClick={() => props.onClick(props.code)}
        >
            <CheckedWrapper>
                <Checker checked={props.checked} />
            </CheckedWrapper>
            <BlackPanel black={props.checked} />
            <TextTypo>{props.title}</TextTypo>
        </ButtonWrapper>
    );
};

export default SelectSquareBox;
