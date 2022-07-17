import { Box, LinearProgress, styled } from '@mui/material';
import CommonBtn from 'component/basic/common/CommonBtn';
import SignupPageHeader from 'component/basic/Signup/SignupPageHeader';
import SkipDialog from 'component/basic/Signup/SkipDialog';
import SignupOnBoard1Layout from 'component/layout/SignupOnBoard1Layout';
import SignupOnBoard2Layout from 'component/layout/SignupOnBoard2Layout';
import SignupOnBoard4Layout from 'component/layout/SignupOnBoard4Layout';
import SignupOnBoard5Layout from 'component/layout/SignupOnBoard5Layout';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';
import { useThunk } from 'redux/common';
import { getSingupInfo1, getSingupInfo2, getSingupInfo4, getSingupInfo5, resetInfoFromSkip } from 'redux/signupInfo';
import { CombinedSignupData } from 'vo/signup';
import { PATH_SIGNUP_LOADING_PAGE } from './common';
import DefaultPageContainer from './DefaultPageContainer';

const SEQ_COUNT: number = 4;
const PAGEING_TIME: number = 80;
const skipPage = [1, 3];

const sliderSetting: Settings = {
    dots: false,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: PAGEING_TIME,
    swipe: false,
    draggable: false,
};

const SignupPageBtn = styled(CommonBtn)`
    width: 100%;
    height: 100%;
`;

const OnBoardingBox = styled(Box)`
    & > div {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

const isPossibleSkip = (idx: number) => {
    for (const i of skipPage) {
        if (idx === i) {
            return true;
        }
    }
    return false;
};

const SignupPage = (): JSX.Element => {
    const navigation = useNavigate();
    const [idx, setIdx] = useState<number>(0);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const sliderRef = useRef<Slider>(null);
    const resetThunk = useThunk(resetInfoFromSkip);

    const infoArr: Array<CombinedSignupData<any>> = [];
    infoArr.push(useSelector(getSingupInfo1));
    infoArr.push(useSelector(getSingupInfo2));
    infoArr.push(useSelector(getSingupInfo4));
    infoArr.push(useSelector(getSingupInfo5));

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
        if (next) {
            if (idx + 1 !== SEQ_COUNT) {
                goPagingAction(true);
            } else {
                navigation(PATH_SIGNUP_LOADING_PAGE);
            }
        } else if (!next) {
            if (idx !== 0) {
                goPagingAction(false);
            } else {
                navigation(-1);
            }
        }
    }, PAGEING_TIME);

    const skipBtnClick = () => {
        setDialogOpen(true);
    };

    const skipConfirmBtnClick = async (isSkip: boolean) => {
        if (isSkip) {
            resetThunk(idx);
            onNextClick(true);
        }
        setDialogOpen(false);
    };

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
                        <SignupOnBoard4Layout />
                    </OnBoardingBox>
                    <OnBoardingBox>
                        <SignupOnBoard5Layout />
                    </OnBoardingBox>
                </Slider>
            </Box>
            <Box height="3.25rem" padding="0rem 1.5rem 1.5rem">
                <SignupPageBtn isBlack={true} disabled={disp.isDisable} onClick={() => onNextClick(true)}>
                    {btnText}
                </SignupPageBtn>
            </Box>
            <SkipDialog open={dialogOpen} onClick={skipConfirmBtnClick} />
        </DefaultPageContainer>
    );
};

export default SignupPage;
