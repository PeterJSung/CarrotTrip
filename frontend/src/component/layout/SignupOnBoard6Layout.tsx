import SignupMBTIContainer from 'component/container/SignupMBTIContainer';
import { memo } from 'react';
import { useThunk } from 'redux/common';
import { updateInfo6 } from 'redux/signupInfo';

const SignupOnBoard6Layout = (): JSX.Element => {
    const updateSignupInfo = useThunk(updateInfo6);

    return (
        <SignupMBTIContainer
            onMBTIChange={(resultMbti) => {
                updateSignupInfo(resultMbti);
            }}
        />
    );
};

export default memo(SignupOnBoard6Layout);
