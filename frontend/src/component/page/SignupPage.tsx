import { Box, Button, LinearProgress, styled } from '@mui/material';
import SignupPageHeader from 'component/basic/Signup/SignupPageHeader';
import SignupOnBoard1Layout from 'component/layout/SignupOnBoard1Layout';
import SignupOnBoard6Layout from 'component/layout/SignupOnBoard6Layout';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider, { Settings } from 'react-slick';
import { singupInfo1, singupInfo2, singupInfo3, singupInfo4, singupInfo5, singupInfo6 } from 'redux/signupInfo';
import { CombinedSignupData } from 'vo/signup';
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
    &.Mui-disabled {
        background-color: #c2c2c2 !important;
    }
`;

const sliderSetting: Settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: PAGEING_TIME,
    swipe: false,
    draggable: false,
};

const OnBoardingBox = styled(Box)`
    & > div {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

const isPossibleSkip = (idx: number) => {
    const skipPage = [1, 5];
    for (const i of skipPage) {
        if (idx === i) {
            return true;
        }
    }
    return false;
};

const SignupPage = (): JSX.Element => {
    const [idx, setIdx] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    const infoArr: CombinedSignupData<any>[] = [];
    infoArr.push(useSelector(singupInfo1));
    infoArr.push(useSelector(singupInfo2));
    infoArr.push(useSelector(singupInfo3));
    infoArr.push(useSelector(singupInfo4));
    infoArr.push(useSelector(singupInfo5));
    infoArr.push(useSelector(singupInfo6));

    const disp = infoArr[idx].disp;
    const forceSkip = isPossibleSkip(idx);
    const isDisable = !forceSkip && disp.isDisable; // disable 이며 skip 이 불가능할때
    const btnText = infoArr[idx].disp.buttonText;

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
                    <OnBoardingBox>
                        <div>2</div>
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <div>3</div>
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <div>4</div>
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <div>5</div>
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <SignupOnBoard6Layout />
                    </OnBoardingBox>
                </Slider>
            </Box>
            <Box height="7.5%" padding="0rem 1.5rem 1.5rem">
                <ClickButton disabled={isDisable} onClick={() => onNextClick(true)}>
                    {btnText}
                </ClickButton>
            </Box>
        </DefaultPageContainer>
    );
};

export default SignupPage;