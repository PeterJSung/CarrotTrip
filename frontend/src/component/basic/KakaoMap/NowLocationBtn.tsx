import { Box, Button, IconButton } from '@mui/material';
import styled from 'styled-components';

import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const BTN_SIZE: number = 1.8;
const BTN_MARGIN: number = 0.5;
const BTN_INNER_PADDING: number = 0.3;

const LocationButton = styled(Button)`
    display: flex !important;
    position: absolute !important;
    top: ${BTN_MARGIN}rem;
    right: ${BTN_MARGIN}rem;
    width: ${BTN_SIZE}rem;
    height: ${BTN_SIZE}rem;
    background-color: #ffffff !important;
    border-radius: 15%;
    z-index: 150;
    box-sizing: border-box;
    padding: ${BTN_INNER_PADDING}rem;
    min-width: 0 !important;
    min-height: 0 !important;
`;

const LocationIcon = styled(GpsFixedIcon)`
    width: 100% !important;
    height: 100% !important;
`;

export interface KakaoMapNowLocationBtnProps {
    onClick: () => void;
}

const KakaoMapNowLocationBtn = (props: KakaoMapNowLocationBtnProps): JSX.Element => {
    return (
        <LocationButton onClick={props.onClick}>
            <LocationIcon />
        </LocationButton>
    );
};

export default KakaoMapNowLocationBtn;
