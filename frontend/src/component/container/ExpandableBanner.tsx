import { Box, Card, CardActionArea, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import { ElementType, useState } from 'react';
import styled from 'styled-components';
import BlackPanel from '../basic/common/BlackPanel';
import Checker from '../basic/common/Checker';

export interface ExpandableBannerProps {
    isFilled: boolean;
    upperText: string;
    lowerText: string;
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

const ExpandableBanner = (props: ExpandableBannerProps): JSX.Element => {
    const [isExtand, setIsExtand] = useState<boolean>(false);

    const height = `${isExtand ? EXPANDED_HEIGHT : DEFAULT_HEIGHT}rem`;

    const onClick = () => {
        setIsExtand(!isExtand);
    };
    console.log(`Rerender ${JSON.stringify(props)}`);
    return (
        <CardWrapper>
            <CardClickable
                onClick={() => onClick()}
                style={{
                    height,
                }}
            >
                <BlackPanel black={isExtand} />
                <CardImage component="img" image="https://picsum.photos/800" />
                <BannerWrapper>
                    <TextWrapper>
                        <TypoUpperText>{props.upperText}</TypoUpperText>
                        <TypoLowerText>{props.lowerText}</TypoLowerText>
                    </TextWrapper>
                    <CheckerWrapper>
                        <Checker checked={props.isFilled && !isExtand} />
                    </CheckerWrapper>
                </BannerWrapper>
            </CardClickable>
            <Collapse in={isExtand} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
                        chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
                        minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.
                        Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
                        until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                        chicken broth; bring to a boil.
                    </Typography>
                </CardContent>
            </Collapse>
        </CardWrapper>
    );
};

export default ExpandableBanner;
