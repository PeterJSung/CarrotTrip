import { TextField } from '@mui/material';
import { getUserExist } from 'api/idretrieve';
import { debounce } from 'lodash';
import { memo, useEffect, useState } from 'react';
import { useThunk } from 'redux/common';
import { updateInfo1 } from 'redux/signupInfo';
import { SignupInfo1Data } from 'vo/signup';
import SignupCommonLayout from './SignupCommonLayout';

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
                    isDisable: nextData.exist,
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
    }, 250);

    const passwordChange = debounce(async (e: any) => {
        updateDataCB({ ...data, pw: e.target.value });
    }, 250);

    const passwordConfirmChange = debounce(async (e: any) => {
        updateDataCB({ ...data, pwConfirm: e.target.value });
    }, 250);

    useEffect(() => {
        updateSignupInfo({
            disp: {
                buttonText: '다음',
                isDisable: true,
            },
            userInfo: data,
        });
    }, []);
    console.log(`Layout Render 1`);
    return (
        <SignupCommonLayout upperText={'닉네임을 알려주세요'} lowerText={'닉네임은 마이페이지에서 변경 가능해요.'}>
            <TextField label={nickNameLabel} variant="outlined" onChange={nickNameChange} />
            <TextField label={passwordLabel} variant="outlined" type="password" onChange={passwordChange} />
            <TextField
                label={passwordConfirmLabel}
                variant="outlined"
                type="password"
                onChange={passwordConfirmChange}
            />
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard1Layout);
