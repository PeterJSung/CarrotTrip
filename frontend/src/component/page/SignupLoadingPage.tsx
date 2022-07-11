import { Box, CircularProgress } from '@mui/material';
import { someBigComplexData } from 'common/util';
import SignupButton from 'component/basic/Signup/SignupButton';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingupInfo1 } from 'redux/signupInfo';
import styled from 'styled-components';
import DefaultPageContainer from './DefaultPageContainer';

const ImgLoading = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-bottom: 1.5rem;
`;

const CommonText = styled.span`
    font-family: 'Noto Sans KR';
    font-style: normal;
`;

const HeadText = styled(CommonText)`
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    max-width: 15rem;
    margin-bottom: 0.75rem;
`;

const WaitingText = styled(CommonText)`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: -0.05em;
`;

const SignupLoadingPage = (): JSX.Element => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [result, setResult] = useState<boolean>(false);
    const signupInfo1 = useSelector(getSingupInfo1);

    useEffect(() => {
        const loadComplexData = async () => {
            // signupSequence
            // calcuateBigdata
            await someBigComplexData();
            setResult(true);
        };
        loadComplexData();
    }, []);

    const btnText = `결과보기`;
    const btnClick = () => {};
    return (
        <DefaultPageContainer>
            <BodyWrapper>
                <Box width="15rem" height="15rem" position="relative">
                    <ImgLoading src="assets/signup/loading.png" />
                    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress
                            style={{
                                marginTop: '-25%',
                            }}
                            color="secondary"
                        />
                    </Box>
                </Box>
                <HeadText>{`${signupInfo1.userInfo?.nickName}님을 위한 추천 여행지를 찾는 중이에요`}</HeadText>
                <WaitingText>잠시만 기다려주세요!</WaitingText>
            </BodyWrapper>
            <Box height="7.5%" padding="0rem 1.5rem 1.5rem">
                <SignupButton disabled={!result} onClick={btnClick}>
                    {btnText}
                </SignupButton>
            </Box>
        </DefaultPageContainer>
    );
};

export default SignupLoadingPage;
