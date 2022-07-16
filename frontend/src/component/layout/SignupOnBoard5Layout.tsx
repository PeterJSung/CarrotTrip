import { MBTI_LEN } from 'component/basic/Signup/signupconstants';
import SignupMBTIContainer from 'component/container/SignupMBTIContainer';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThunk } from 'redux/common';
import { updateInfo5 } from 'redux/signupInfo';
import SignupCommonLayout from './SignupCommonLayout';

const SignupOnBoard5Layout = (): JSX.Element => {
    const { t } = useTranslation();
    const updateSignupInfo = useThunk(updateInfo5);
    const [mbtiStr, setMBTIStr] = useState<string>('');

    useEffect(() => {
        const isDisable = mbtiStr.length !== MBTI_LEN;
        updateSignupInfo({
            disp: {
                buttonText: t('common.confirm'),
                isDisable,
            },
            userInfo: isDisable ? '' : mbtiStr,
        });
    }, [mbtiStr, updateSignupInfo]);

    return (
        <SignupCommonLayout
            upperText={t('signup.onboard.five.uppertext')}
            lowerText={t('signup.onboard.five.lowertext')}
        >
            <SignupMBTIContainer onMBTIChange={setMBTIStr} />
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard5Layout);
