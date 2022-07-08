import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export interface RegionDiscriptionProps {
    region: string;
}

const REGION_DISCRIPTION_HEIGHT: number = 2.5;
const REGION_DISCRIPTION_WIDTH: number = 10;

/*
const ProfileSVG = (): JSX.Element => (
    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 7V5C17 3.93913 16.5786 2.92172 15.8284 2.17157C15.0783 1.42143 14.0609 1 13 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V7"
            stroke="#111313"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
*/

const ButtonWrapper = styled(Box)`
    width: ${REGION_DISCRIPTION_WIDTH}rem !important;
    height: ${REGION_DISCRIPTION_HEIGHT}rem !important;
    background-color: #ffffff !important;
    border-radius: 0.25rem;
    z-index: 150;
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
    z-index: 150;
`;

const RegionDiscription = (props: RegionDiscriptionProps): JSX.Element => {
    return (
        <ButtonWrapper>
            <TextCompo>{props.region}</TextCompo>
        </ButtonWrapper>
    );
};

export default RegionDiscription;
