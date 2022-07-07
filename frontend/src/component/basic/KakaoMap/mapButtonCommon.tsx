import { IconButton } from '@mui/material';
import styled from 'styled-components';

const BTN_SIZE: number = 2.5;
const BTN_MARGIN: number = 0.5;
const BTN_INNER_PADDING: number = 0.3;

const ButtonWrapper = styled(IconButton)`
    width: ${BTN_SIZE}rem !important;
    height: ${BTN_SIZE}rem !important;
    background-color: #ffffff !important;
    border-radius: 50%;
    z-index: 150;
    box-sizing: border-box;
`;

const mapButtonCommon = (icon: JSX.Element, handler: () => void): JSX.Element => {
    return <ButtonWrapper onClick={handler}>{icon}</ButtonWrapper>;
};

export { mapButtonCommon };
