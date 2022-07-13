import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export interface RegionDiscriptionProps {
    region: string;
}

const REGION_DISCRIPTION_HEIGHT: number = 2.5;
const REGION_DISCRIPTION_WIDTH: number = 10;

const ButtonWrapper = styled(Box)`
    width: ${REGION_DISCRIPTION_WIDTH}rem !important;
    height: ${REGION_DISCRIPTION_HEIGHT}rem !important;
    background-color: #ffffff !important;
    border-radius: 0.25rem;
    z-index: 2;
    box-sizing: border-box;
`;

const TextCompo = styled(Typography)`
    position: relative;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    font-family: Noto Sans KR !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 15px !important;
    line-height: 22px !important;
    z-index: 2;
`;

const RegionDiscription = (props: RegionDiscriptionProps): JSX.Element => {
    return (
        <ButtonWrapper>
            <TextCompo>{props.region}</TextCompo>
        </ButtonWrapper>
    );
};

export default RegionDiscription;
