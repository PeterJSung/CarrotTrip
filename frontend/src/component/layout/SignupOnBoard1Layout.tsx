import { Box, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    & > div .MuiOutlinedInput-root {
        margin-bottom: 2rem;
    }
`;

const NickNameTypo = styled(Typography)`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #191919;
    margin-bottom: 0.5rem;
`;

const NickNameInfoTypo = styled(Typography)`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6d6d6d;
    margin-bottom: 1.5rem;
`;

const SignupOnBoard1Layout = (): JSX.Element => {
    const nickNameLabel = '닉네임';
    const passwordLabel = '비밀번호';
    const passwordConfirmLabel = '비밀번호 확인';

    return (
        <Wrapper>
            <NickNameTypo>닉네임을 알려주세요</NickNameTypo>
            <NickNameInfoTypo>닉네임은 마이페이지에서 변경 가능해요.</NickNameInfoTypo>
            <TextField label={nickNameLabel} variant="outlined" />
            <TextField label={passwordLabel} variant="outlined" type="password" />
            <TextField label={passwordConfirmLabel} variant="outlined" type="password" />
        </Wrapper>
    );
};

export default SignupOnBoard1Layout;
