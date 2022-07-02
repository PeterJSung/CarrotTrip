import { MBTI_LEN } from 'component/basic/Signup/signupconstants';
import SignupMBTIContainer from 'component/container/SignupMBTIContainer';
import { memo, useEffect, useState } from 'react';
import { useThunk } from 'redux/common';
import { updateInfo6 } from 'redux/signupInfo';

const SignupOnBoard6Layout = (): JSX.Element => {
    const updateSignupInfo = useThunk(updateInfo6);
    const [mbtiStr, setMBTIStr] = useState<string>('');

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

    return <SignupMBTIContainer onMBTIChange={setMBTIStr} />;
};

export default memo(SignupOnBoard6Layout);