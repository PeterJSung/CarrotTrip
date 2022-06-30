import { Box, TextField, Typography } from '@mui/material';
import { getUserExist } from 'api/idretrieve';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    & > div .MuiOutlinedInput-root {
        margin-bottom: 2rem;
    }
`;

const NickNameTypo = styled(Typography)`
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 20px !important;
    line-height: 29px !important;
    color: #191919 !important;
    margin-bottom: 0.5rem !important;
`;

const NickNameInfoTypo = styled(Typography)`
    font-family: 'Noto Sans KR' !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 15px !important;
    line-height: 22px !important;
    color: #6d6d6d !important;
    margin-bottom: 1.5rem !important;
`;

const nickNameLabel = '닉네임';
const passwordLabel = '비밀번호';
const passwordConfirmLabel = '비밀번호 확인';

const SignupOnBoard1Layout = (): JSX.Element => {
    const [nStr, setNStr] = useState<string>('');
    const [exist, setExist] = useState<boolean>(false);

    const nickNameChange = useCallback(
        debounce(async (e: any) => {
            const currentUserName: string = e.target.value;
            const isExist = await getUserExist(currentUserName);
            setNStr(currentUserName);
            setExist(isExist);
        }, 250),
        [],
    );

    console.log(`Render ${nStr} ${exist}`);
    return (
        <Wrapper>
            <NickNameTypo>닉네임을 알려주세요</NickNameTypo>
            <NickNameInfoTypo>닉네임은 마이페이지에서 변경 가능해요.</NickNameInfoTypo>
            <TextField label={nickNameLabel} variant="outlined" onChange={nickNameChange} />
            <TextField label={passwordLabel} variant="outlined" type="password" />
            <TextField label={passwordConfirmLabel} variant="outlined" type="password" />
        </Wrapper>
    );
};

export default SignupOnBoard1Layout;
