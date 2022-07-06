import { Box, Card, CardActionArea, CardMedia, Collapse, Typography } from '@mui/material';
import { ElementType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import BlackPanel from '../basic/common/BlackPanel';
import Checker from '../basic/common/Checker';

export interface ExpandableBannerProps {
    isExpand: boolean;
    isFilled: boolean;
    upperText: string;
    lowerText: string;
    src: string;
    onClick: () => void;
}

const DEFAULT_HEIGHT = 4.3;
const EXPANDED_HEIGHT = 6.1;
const WRAPPER_HEIGHT = 3;

const BANNER_MARGIN = 1.5;

const CardWrapper = styled(Card)`
    border-radius: 0.5rem !important;
`;

const CardClickable = styled(CardActionArea)`
    transition: all 0.3s ease-out !important;
    overflow: hidden !important;
    position: relative !important;
`;

const BannerWrapper = styled(Box)`
    display: flex;
    position: absolute;
    justify-content: space-between !important;
    width: 100%;
    height: ${WRAPPER_HEIGHT}rem;
    top: calc(50% - ${WRAPPER_HEIGHT / 2}rem);
`;

const CardImage = styled(CardMedia<ElementType<any>>)`
    height: 100%;
`;

const CommonText = styled(Typography)`
    color: white !important;
    font-family: 'Noto Sans KR' !important;
    font-style: normal !important;
`;

const TypoUpperText = styled(CommonText)`
    font-weight: 700 !important;
    font-size: 1rem !important;
    line-height: 1.4rem !important;
`;

const TypoLowerText = styled(CommonText)`
    font-weight: 400 !important;
    font-size: 0.8rem !important;
    line-height: 1.1rem !important;
`;

const TextWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${BANNER_MARGIN}rem;
    z-index: 2;
`;

const CheckerWrapper = styled(Box)`
    display: flex;
    align-items: center;
    margin-right: ${BANNER_MARGIN}rem;
    z-index: 1;
`;

const ExpandableBanner = (props: PropsWithChildren<ExpandableBannerProps>): JSX.Element => {
    const isExpand = props.isExpand;
    const isFilled = props.isFilled;
    const upperText = props.upperText;
    const lowerText = props.lowerText;
    const height = `${isExpand ? EXPANDED_HEIGHT : DEFAULT_HEIGHT}rem`;

    return (
        <CardWrapper>
            <CardClickable
                onClick={() => props.onClick()}
                style={{
                    height,
                }}
            >
                <BlackPanel black={isExpand} />
                <CardImage component="img" image={props.src} />
                <BannerWrapper>
                    <TextWrapper>
                        <TypoUpperText>{upperText}</TypoUpperText>
                        <TypoLowerText>{lowerText}</TypoLowerText>
                    </TextWrapper>
                    <CheckerWrapper>
                        <Checker checked={isFilled && !isExpand} />
                    </CheckerWrapper>
                </BannerWrapper>
            </CardClickable>
            <Collapse in={isExpand} timeout="auto" unmountOnExit>
                {props.children}
            </Collapse>
        </CardWrapper>
    );
};

export default ExpandableBanner;
