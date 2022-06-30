import { Box, TextField, Typography } from '@mui/material';
import { getUserExist } from 'api/idretrieve';
import { debounce } from 'lodash';
import { memo, useCallback, useEffect, useState } from 'react';
import { useThunk } from 'redux/common';
import { updateInfo1 } from 'redux/signupInfo';
import styled from 'styled-components';
import { SignupInfo1Data } from 'vo/signup';

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
type InputLayoutType = SignupInfo1Data & { exist: boolean };
const SignupOnBoard1Layout = (): JSX.Element => {
    const [data, setData] = useState<InputLayoutType>({
        nickName: '',
        pw: '',
        pwConfirm: '',
        exist: false,
    });

    const updateSignupInfo = useThunk(updateInfo1);

    const updateDataCB = (nextData: InputLayoutType) => {
        if (nextData.nickName !== '' && nextData.pw !== '' && nextData.pwConfirm !== '') {
            updateSignupInfo({
                disp: {
                    buttonText: '다음',
                    isEnabled: true,
                },
                userInfo: nextData,
            });
        }
        setData(nextData);
    };

    const nickNameChange = useCallback(
        debounce(async (e: any) => {
            const currentUserName: string = e.target.value;
            const isExist = await getUserExist(currentUserName);
            updateDataCB({ ...data, nickName: currentUserName, exist: isExist });
        }, 250),
        [],
    );

    const passwordChange = useCallback(
        debounce(async (e: any) => {
            updateDataCB({ ...data, pw: e.target.value });
        }, 250),
        [],
    );

    const passwordConfirmChange = useCallback(
        debounce(async (e: any) => {
            updateDataCB({ ...data, pwConfirm: e.target.value });
        }, 250),
        [],
    );

    useEffect(() => {
        updateSignupInfo({
            disp: {
                buttonText: '다음',
                isEnabled: false,
            },
            userInfo: data,
        });
    }, []);

    console.log(`Render Call`);
    return (
        <Wrapper>
            <NickNameTypo>닉네임을 알려주세요</NickNameTypo>
            <NickNameInfoTypo>닉네임은 마이페이지에서 변경 가능해요.</NickNameInfoTypo>
            <TextField label={nickNameLabel} variant="outlined" onChange={nickNameChange} />
            <TextField label={passwordLabel} variant="outlined" type="password" onChange={passwordChange} />
            <TextField
                label={passwordConfirmLabel}
                variant="outlined"
                type="password"
                onChange={passwordConfirmChange}
            />
        </Wrapper>
    );
};

export default memo(SignupOnBoard1Layout);
