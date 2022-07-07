import { Box, LinearProgress, styled } from '@mui/material';
import SignupButton from 'component/basic/Signup/SignupButton';
import SignupPageHeader from 'component/basic/Signup/SignupPageHeader';
import SkipDialog from 'component/basic/Signup/SkipDialog';
import SignupOnBoard1Layout from 'component/layout/SignupOnBoard1Layout';
import SignupOnBoard2Layout from 'component/layout/SignupOnBoard2Layout';
import SignupOnBoard3Layout from 'component/layout/SignupOnBoard3Layout';
import SignupOnBoard4Layout from 'component/layout/SignupOnBoard4Layout';
import SignupOnBoard5Layout from 'component/layout/SignupOnBoard5Layout';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider, { Settings } from 'react-slick';
import { singupInfo1, singupInfo2, singupInfo3, singupInfo4, singupInfo5 } from 'redux/signupInfo';
import { CombinedSignupData } from 'vo/signup';
import DefaultPageContainer from './DefaultPageContainer';

const SEQ_COUNT: number = 5;
const PAGEING_TIME: number = 80;

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
    const skipPage = [1, 4];
    for (const i of skipPage) {
        if (idx === i) {
            return true;
        }
    }
    return false;
};

const SignupPage = (): JSX.Element => {
    const [idx, setIdx] = useState<number>(0);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const sliderRef = useRef<Slider>(null);

    const infoArr: Array<CombinedSignupData<any>> = [];
    infoArr.push(useSelector(singupInfo1));
    infoArr.push(useSelector(singupInfo2));
    infoArr.push(useSelector(singupInfo3));
    infoArr.push(useSelector(singupInfo4));
    infoArr.push(useSelector(singupInfo5));

    const disp = infoArr[idx].disp;
    const forceSkip = isPossibleSkip(idx);
    const isDisable = !forceSkip && disp.isDisable; // disable 이며 skip 이 불가능할때
    const btnText = infoArr[idx].disp.buttonText;

    const goPagingAction = (isNext: boolean) => {
        if (isNext) {
            setIdx(idx + 1);
            sliderRef.current?.slickGoTo(idx + 1);
        } else {
            setIdx(idx - 1);
            sliderRef.current?.slickGoTo(idx - 1);
        }
    };

    const onNextClick = debounce((next: boolean) => {
        if (next && idx + 1 !== SEQ_COUNT) {
            goPagingAction(true);
        } else if (!next && idx !== 0) {
            goPagingAction(false);
        }
    }, PAGEING_TIME);

    const skipBtnClick = () => {
        setDialogOpen(true);
    };

    const skipConfirmBtnClick = async (isSkip: boolean) => {
        if (isSkip) {
            const isLast = idx + 1 === SEQ_COUNT;
            if (isLast) {
                //uploaddata
            } else {
                goPagingAction(true);
            }
        }
        setDialogOpen(false);
    };
    console.log(`Page Render`);
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
            <SignupPageHeader onClick={onNextClick} isSkip={forceSkip} onSkipClick={skipBtnClick} />
            <Box flexGrow="1">
                <Slider ref={sliderRef} {...sliderSetting}>
                    <OnBoardingBox>
                        <SignupOnBoard1Layout />
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <SignupOnBoard2Layout />
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <SignupOnBoard3Layout />
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <SignupOnBoard4Layout />
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <SignupOnBoard5Layout />
                    </OnBoardingBox>
                </Slider>
            </Box>
            <Box height="7.5%" padding="0rem 1.5rem 1.5rem">
                <SignupButton disabled={disp.isDisable} onClick={() => onNextClick(true)}>
                    {btnText}
                </SignupButton>
            </Box>
            <SkipDialog open={dialogOpen} onClick={skipConfirmBtnClick} />
        </DefaultPageContainer>
    );
};

export default SignupPage;
