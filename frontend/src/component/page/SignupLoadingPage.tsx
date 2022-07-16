import { Box } from '@mui/material';
import { someBigComplexData } from 'common/util';
import CommonBtn from 'component/basic/common/CommonBtn';
import LoadingImg from 'component/basic/Signup/LoadingImg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingupInfo1 } from 'redux/signupInfo';
import styled from 'styled-components';
import DefaultPageContainer from './DefaultPageContainer';

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

const SignupLoadingPageBtn = styled(CommonBtn)`
    width: 100%;
    height: 100%;
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
    const name = useSelector(getSingupInfo1).userInfo?.nickName;

    useEffect(() => {
        const loadComplexData = async () => {
            // signupSequence
            // calcuateBigdata
            await someBigComplexData();
            setResult(true);
        };
        loadComplexData();
    }, []);

    const btnClick = () => {};
    return (
        <DefaultPageContainer>
            <BodyWrapper>
                <LoadingImg />
                <HeadText>{t('signuploadingpage.first', { name })}</HeadText>
                <WaitingText>{t('signuploadingpage.second')}</WaitingText>
            </BodyWrapper>
            <Box height="3.25rem" padding="0rem 1.5rem 1.5rem">
                <SignupLoadingPageBtn isBlack={true} disabled={!result} onClick={btnClick}>
                    {t('signuploadingpage.btn')}
                </SignupLoadingPageBtn>
            </Box>
        </DefaultPageContainer>
    );
};

export default SignupLoadingPage;
