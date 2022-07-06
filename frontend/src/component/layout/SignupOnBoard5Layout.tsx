import { MBTI_LEN } from 'component/basic/Signup/signupconstants';
import SignupMBTIContainer from 'component/container/SignupMBTIContainer';
import { memo, useEffect, useState } from 'react';
import { useThunk } from 'redux/common';
import { updateInfo5 } from 'redux/signupInfo';
import SignupCommonLayout from './SignupCommonLayout';

const SignupOnBoard5Layout = (): JSX.Element => {
    const updateSignupInfo = useThunk(updateInfo5);
    const [mbtiStr, setMBTIStr] = useState<string>('');

    console.log(`Render Layout 5`);

    useEffect(() => {
        const isDisable = mbtiStr.length !== MBTI_LEN;
        updateSignupInfo({
            disp: {
                buttonText: '확인',
                isDisable,
            },
            userInfo: isDisable ? '' : mbtiStr,
        });
    }, [mbtiStr, updateSignupInfo]);

    return (
        <SignupCommonLayout upperText={'MBTI를 알려주세요'} lowerText={'모른다면 넘어가주세요.'}>
            <SignupMBTIContainer onMBTIChange={setMBTIStr} />
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard5Layout);
