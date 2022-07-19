import { Box } from '@mui/material';
import { pause } from 'common/util';
import CommonBtn from 'component/basic/common/CommonBtn';
import LoadingImg from 'component/basic/Signup/LoadingImg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { getSingupInfo1, signupSeqence } from 'redux/signupInfo';
import styled from 'styled-components';
import { PATH_HOME_PAGE } from './common';
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
    const [complete, setComplete] = useState<boolean>(false);
    const name = useSelector(getSingupInfo1).userInfo?.nickName;
    const signupThunk = useThunk(signupSeqence);

    useEffect(() => {
        const signupSeqence = async () => {
            const promiseArr: Array<Promise<any>> = [];
            promiseArr.push(signupThunk());
            promiseArr.push(pause(3000));
            await Promise.allSettled(promiseArr);
            setComplete(true);
        };
        signupSeqence();
    }, []);

    const btnClick = () => {
        navigate(PATH_HOME_PAGE);
    };

    return (
        <DefaultPageContainer>
            <BodyWrapper>
                <LoadingImg isDone={complete} />
                <HeadText>{t('signuploadingpage.first', { name })}</HeadText>
                <WaitingText>{t('signuploadingpage.second')}</WaitingText>
            </BodyWrapper>
            <Box height="3.25rem" padding="0rem 1.5rem 1.5rem">
                <SignupLoadingPageBtn isBlack={true} disabled={!complete} onClick={btnClick}>
                    {t('signuploadingpage.btn')}
                </SignupLoadingPageBtn>
            </Box>
        </DefaultPageContainer>
    );
};

export default SignupLoadingPage;
