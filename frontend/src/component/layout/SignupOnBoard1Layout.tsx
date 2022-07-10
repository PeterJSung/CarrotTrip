import { Box, TextField } from '@mui/material';
import { getUserExist } from 'api/idretrieve';
import { debounce } from 'lodash';
import { memo, useEffect, useState } from 'react';
import { useThunk } from 'redux/common';
import { updateInfo1 } from 'redux/signupInfo';
import styled from 'styled-components';
import { SignupInfo1Data } from 'vo/signup';
import SignupCommonLayout from './SignupCommonLayout';

const nickNameLabel = '닉네임';
const passwordLabel = '비밀번호';
const passwordConfirmLabel = '비밀번호 확인';
type InputLayoutType = SignupInfo1Data & { exist: boolean };

const DEFAULT_DEBOUNCE_TEXT = 100;

const TextFiledWrapper = styled(Box)`
    width: 100%;
    & .MuiFormControl-root {
        position: relative;
        width: 100%;
        margin-bottom: 2rem;
    }
    & .MuiFormHelperText-root {
        position: absolute;
        bottom: -1.5rem;
    }
`;

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
                    isDisable: nextData.exist || nextData.pw !== nextData.pwConfirm,
                },
                userInfo: nextData,
            });
        }
        setData(nextData);
    };

    const nickNameChange = debounce(async (e: any) => {
        const currentUserName: string = e.target.value;
        const isExist = await getUserExist(currentUserName);
        updateDataCB({ ...data, nickName: currentUserName, exist: isExist });
    }, DEFAULT_DEBOUNCE_TEXT);

    const passwordChange = debounce(async (e: any) => {
        updateDataCB({ ...data, pw: e.target.value });
    }, DEFAULT_DEBOUNCE_TEXT);

    const passwordConfirmChange = debounce(async (e: any) => {
        updateDataCB({ ...data, pwConfirm: e.target.value });
    }, DEFAULT_DEBOUNCE_TEXT);

    useEffect(() => {
        updateSignupInfo({
            disp: {
                buttonText: '다음',
                isDisable: true,
            },
            userInfo: data,
        });
    }, []);

    const passwordNotMatch = data.pw !== data.pwConfirm;

    return (
        <SignupCommonLayout upperText={'닉네임을 알려주세요'} lowerText={'닉네임은 마이페이지에서 변경 가능해요.'}>
            <TextFiledWrapper>
                <TextField
                    error={data.exist}
                    helperText={data.exist ? '이미 존재하는 닉네임 입니다.' : ''}
                    label={nickNameLabel}
                    variant="outlined"
                    onChange={nickNameChange}
                />
                <TextField label={passwordLabel} variant="outlined" type="password" onChange={passwordChange} />
                <TextField
                    error={passwordNotMatch}
                    helperText={passwordNotMatch ? '일치하지 않는 비밀번호 입니다.' : ''}
                    label={passwordConfirmLabel}
                    variant="outlined"
                    type="password"
                    onChange={passwordConfirmChange}
                />
            </TextFiledWrapper>
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard1Layout);
