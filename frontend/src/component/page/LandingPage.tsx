import { Box } from '@mui/material';
import CommonBtn from 'component/basic/common/CommonBtn';
import { YELLOW_COLOR } from 'globaltheme';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PATH_SIGNIN_PAGE, PATH_SIGNUP_PAGE } from './common';
import DefaultPageContainer from './DefaultPageContainer';

const CircleIcon = styled.div`
    width: 1.21rem;
    height: 1.21rem;
    background-color: ${YELLOW_COLOR};
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 43%;
    transform: translateX(-50%) translateY(-50%);
`;

const BackgroundPannel = styled(Box)`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: ${YELLOW_COLOR};
`;

const ButtonWrapper = styled(Box)`
    padding: 0rem 3.2rem 2.625rem;
    display: flex;
    flex-direction: column;
    & > :first-child {
        margin-bottom: 1.25rem;
    }
`;

const LandingPageBtn = styled(CommonBtn)`
    width: 100%;
    height: 3rem;
`;

const AppNameText = styled.span`
    font-family: 'PyeongChangPeace';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 56px;
    color: #000000;
`;

const MarkerSVG = (): JSX.Element => (
    <svg
        style={{
            position: 'absolute',
        }}
        width="100%"
        height="100%"
        viewBox="0 0 62 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M60.25 30.5C60.25 53.25 31 72.75 31 72.75C31 72.75 1.75 53.25 1.75 30.5C1.75 22.7424 4.83169 15.3026 10.3171 9.81713C15.8026 4.33169 23.2424 1.25 31 1.25C38.7576 1.25 46.1974 4.33169 51.6829 9.81713C57.1683 15.3026 60.25 22.7424 60.25 30.5Z"
            fill="#191919"
            stroke="#191919"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const LandingPage = (): JSX.Element => {
    const { t } = useTranslation();
    const nivagate = useNavigate();
    const onClickLogin = () => {
        nivagate(PATH_SIGNIN_PAGE);
    };

    const onClickSignup = () => {
        nivagate(PATH_SIGNUP_PAGE);
    };

    return (
        <DefaultPageContainer>
            <BackgroundPannel />
            <Box flexGrow="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box width="3.625rem" height="4.46rem" position="relative">
                    <MarkerSVG />
                    <CircleIcon />
                </Box>
                <AppNameText>{t('common.appname')}</AppNameText>
            </Box>
            <ButtonWrapper>
                <LandingPageBtn isBlack={true} onClick={onClickLogin}>
                    {t('loginpage.signin')}
                </LandingPageBtn>
                <LandingPageBtn isBlack={false} onClick={onClickSignup}>
                    {t('loginpage.signup')}
                </LandingPageBtn>
            </ButtonWrapper>
        </DefaultPageContainer>
    );
};

export default LandingPage;
