import { Box } from '@mui/material';
import CommonBtn from 'component/basic/common/CommonBtn';
import { YELLOW_COLOR } from 'globaltheme';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultPageContainer from './DefaultPageContainer';

const BackgroundPannel = styled(Box)`
    height: 100%;
    width: 100%;
    position: absolute;
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

const LoginPageBtn = styled(CommonBtn)`
    width: 100%;
    height: 3rem;
`;

const LoginPage = (): JSX.Element => {
    const nivagate = useNavigate();
    const onClick = () => {
        console.log('Click');
        nivagate('/test');
    };
    console.log(kakao.maps.services);
    return (
        <DefaultPageContainer>
            <BackgroundPannel />
            <Box flexGrow="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                Test
            </Box>
            <ButtonWrapper>
                <LoginPageBtn isBlack={true} onClick={console.log}>
                    로그인
                </LoginPageBtn>
                <LoginPageBtn isBlack={false} onClick={console.log}>
                    회원가입
                </LoginPageBtn>
            </ButtonWrapper>
        </DefaultPageContainer>
    );
};

export default LoginPage;
