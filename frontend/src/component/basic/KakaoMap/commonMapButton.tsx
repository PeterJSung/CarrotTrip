import { IconButton } from '@mui/material';
import styled from 'styled-components';

const BTN_SIZE: number = 2.5;

const ButtonWrapper = styled(IconButton)`
    width: ${BTN_SIZE}rem !important;
    height: ${BTN_SIZE}rem !important;
    background-color: #ffffff !important;
    border-radius: 50%;
    z-index: 2;
    box-sizing: border-box;
`;

const commonMapButton = (icon: JSX.Element, handler: () => void): JSX.Element => {
    return <ButtonWrapper onClick={handler}>{icon}</ButtonWrapper>;
};

export interface CommonMapButtonProps {
    onClick: () => void;
}

export { commonMapButton };
