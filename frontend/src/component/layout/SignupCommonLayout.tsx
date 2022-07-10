import { Box, Typography } from '@mui/material';
import { memo, PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface SignupCommonLayoutProps {
    upperText: string;
    lowerText: string;
}

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const UpperTextTypo = styled(Typography)`
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 20px !important;
    line-height: 29px !important;
    color: #191919 !important;
    margin-bottom: 0.5rem !important;
`;

const LowerTextTypo = styled(Typography)`
    font-family: 'Noto Sans KR' !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 15px !important;
    line-height: 22px !important;
    color: #6d6d6d !important;
    margin-bottom: 1.5rem !important;
`;
const SignupCommonLayout = (props: PropsWithChildren<SignupCommonLayoutProps>): JSX.Element => {
    return (
        <Wrapper>
            <UpperTextTypo>{props.upperText}</UpperTextTypo>
            <LowerTextTypo>{props.lowerText}</LowerTextTypo>
            {props.children}
        </Wrapper>
    );
};

export default memo(SignupCommonLayout);
