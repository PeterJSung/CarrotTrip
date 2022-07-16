import { Box, TextField } from '@mui/material';
import { getUserExist } from 'api/idretrieve';
import { debounce } from 'lodash';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThunk } from 'redux/common';
import { updateInfo1 } from 'redux/signupInfo';
import styled from 'styled-components';
import { SignupInfo1Data } from 'vo/signup';
import SignupCommonLayout from './SignupCommonLayout';

type InputLayoutType = SignupInfo1Data & { exist: boolean };

const DEFAULT_DEBOUNCE_TEXT = 200;

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
    const { t } = useTranslation();
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
                    buttonText: t('common.next'),
                    isDisable: nextData.exist || nextData.pw !== nextData.pwConfirm,
                },
                userInfo: nextData,
            });
        }
        setData(nextData);
    };

    const nickNameChange = debounce(async (e: any) => {
        const currentUserName: string = e.target.value;
        let isExist: boolean = false;
        if (currentUserName.length > 0) {
            isExist = await getUserExist(currentUserName);
        }
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
                buttonText: t('common.next'),
                isDisable: true,
            },
            userInfo: data,
        });
    }, []);

    const passwordNotMatch = data.pw !== data.pwConfirm;

    return (
        <SignupCommonLayout upperText={t('signup.onboard.one.uppertext')} lowerText={t('signup.onboard.one.lowertext')}>
            <TextFiledWrapper>
                <TextField
                    error={data.exist}
                    helperText={data.exist ? t('signup.onboard.one.duplication') : ''}
                    label={t('common.nickname')}
                    variant="outlined"
                    onChange={nickNameChange}
                />
                <TextField label={t('common.password')} variant="outlined" type="password" onChange={passwordChange} />
                <TextField
                    error={passwordNotMatch}
                    helperText={passwordNotMatch ? t('signup.onboard.one.missmatch') : ''}
                    label={t('common.passwordconfirm')}
                    variant="outlined"
                    type="password"
                    onChange={passwordConfirmChange}
                />
            </TextFiledWrapper>
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard1Layout);
