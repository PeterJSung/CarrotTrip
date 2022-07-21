import { Box, TextField, Typography } from '@mui/material';
import BackArrowBtn from 'component/basic/common/BackArrowBtn';
import CommonBtn from 'component/basic/common/CommonBtn';
import SignupCommonLayout from 'component/layout/SignupCommonLayout';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { getErrorMsg, getIsLogin, signinThunk } from 'redux/userInfo';
import styled from 'styled-components';
import { SignupInfo1Data } from 'vo/signup';
import { PATH_HOME_PAGE } from './common';
import DefaultPageContainer from './DefaultPageContainer';

type InputLayoutType = Pick<SignupInfo1Data, 'nickName' | 'pw'>;

const DEFAULT_DEBOUNCE_TEXT = 200;

const SigninPageBtn = styled(CommonBtn)`
    width: 100%;
    height: 100%;
`;

const TextFiledWrapper = styled(Box)`
    width: 100%;
    & .MuiFormControl-root {
        position: relative;
        width: 100%;
    }
    & :not(:last-child).MuiFormControl-root {
        margin-bottom: 2rem;
    }
    & .MuiFormHelperText-root {
        position: absolute;
        bottom: -1.5rem;
    }
`;

const LoginTypo = styled(Typography)`
    font-family: Noto Sans KR !important;
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 23px !important;
    color: #191919 !important;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const ErrorTypo = styled(Typography)`
    font-family: Noto Sans KR !important;
    font-style: normal !important;
    line-height: 23px !important;
    color: red !important;
`;

const SigninPage = (): JSX.Element => {
    const { t } = useTranslation();
    const signIn = useThunk(signinThunk);
    const loginErrorMsg = useSelector(getErrorMsg);
    const login = useSelector(getIsLogin);

    const [data, setData] = useState<InputLayoutType>({
        nickName: '',
        pw: '',
    });

    const disabled = data.nickName === '' || data.pw === '';

    const nivagate = useNavigate();
    const onClickLogin = () => {
        signIn(data.nickName, data.pw);
    };

    useEffect(() => {
        login && nivagate(PATH_HOME_PAGE);
    }, [login]);

    const onClickBack = () => {
        nivagate(-1);
    };

    const nickNameChange = debounce(async (e: any) => {
        const currentUserName: string = e.target.value;
        setData({ ...data, nickName: currentUserName });
    }, DEFAULT_DEBOUNCE_TEXT);

    const passwordChange = debounce(async (e: any) => {
        setData({ ...data, pw: e.target.value });
    }, DEFAULT_DEBOUNCE_TEXT);

    return (
        <DefaultPageContainer>
            <Box position="relative" display="flex" flexDirection="row" justifyContent="space-between">
                <BackArrowBtn onClick={onClickBack} />
                <LoginTypo>{t('loginpage.signin')}</LoginTypo>
            </Box>
            <Box px="1rem" flexGrow="1" display="flex" flexDirection="column">
                <SignupCommonLayout upperText={t('loginpage.uppertext')} lowerText={t('loginpage.lowertext')}>
                    <TextFiledWrapper>
                        <TextField label={t('common.nickname')} variant="outlined" onChange={nickNameChange} />
                        <TextField
                            label={t('common.password')}
                            variant="outlined"
                            type="password"
                            onChange={passwordChange}
                        />
                    </TextFiledWrapper>
                    {loginErrorMsg ? <ErrorTypo>{loginErrorMsg}</ErrorTypo> : <></>}
                </SignupCommonLayout>
            </Box>
            <Box height="3.25rem" padding="0rem 1.5rem 1.5rem">
                <SigninPageBtn isBlack={true} disabled={disabled} onClick={onClickLogin}>
                    {t('common.next')}
                </SigninPageBtn>
            </Box>
        </DefaultPageContainer>
    );
};

export default SigninPage;
