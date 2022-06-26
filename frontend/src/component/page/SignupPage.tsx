import { Box, Button, LinearProgress, styled } from '@mui/material';
import SignupPageHeader from 'component/basic/Signup/SignupPageHeader';
import SignupOnBoard1Layout from 'component/layout/SignupOnBoard1Layout';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import DefaultPageContainer from './DefaultPageContainer';

const SEQ_COUNT: number = 6;
const PAGEING_TIME: number = 80;
const ClickButton = styled(Button)`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    color: white;
    background-color: #111313;
    //color: white;
    &:hover {
        background-color: #111313af;
    }
`;

const sliderSetting: Settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: PAGEING_TIME,
};

const OnBoardingBox = styled(Box)`
    & > div {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

const SignupPage = (): JSX.Element => {
    const [idx, setIdx] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    const onNextClick = debounce((next: boolean) => {
        if (next && idx + 1 !== SEQ_COUNT) {
            setIdx(idx + 1);
            sliderRef.current?.slickGoTo(idx + 1);
        } else if (!next && idx !== 0) {
            setIdx(idx - 1);
            sliderRef.current?.slickGoTo(idx - 1);
        }
    }, PAGEING_TIME);

    return (
        <DefaultPageContainer>
            <LinearProgress
                style={{
                    backgroundColor: 'rgba(1,1,1,0)',
                }}
                color="secondary"
                variant="determinate"
                value={(100 * (idx + 1)) / SEQ_COUNT}
            />
            <SignupPageHeader onClick={onNextClick} isSkip={true} />
            <Box flexGrow="1">
                <Slider ref={sliderRef} {...sliderSetting}>
                    <OnBoardingBox>
                        <SignupOnBoard1Layout />
                    </OnBoardingBox>
                </Slider>
            </Box>
            <Box height="7.5%" padding="0rem 1.5rem 1.5rem">
                <ClickButton onClick={() => onNextClick(true)}>{idx === SEQ_COUNT ? '확인' : '다음'}</ClickButton>
            </Box>
        </DefaultPageContainer>
    );
};

export default SignupPage;
