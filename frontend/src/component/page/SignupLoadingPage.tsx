import { Box } from '@mui/material';
import SignupButton from 'component/basic/Signup/SignupButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DefaultPageContainer from './DefaultPageContainer';

const SignupLoadingPage = (): JSX.Element => {
    const { t } = useTranslation();
    const [result, setResult] = useState<boolean>(false);
    const [compelxData, setComplexData] = useState<any>();
    const btnText = `결과보기`;
    return (
        <DefaultPageContainer>
            <Box flexGrow="1">Loading</Box>
            <Box height="7.5%" padding="0rem 1.5rem 1.5rem">
                <SignupButton disabled={result} onClick={console.log}>
                    {btnText}
                </SignupButton>
            </Box>
        </DefaultPageContainer>
    );
};

export default SignupLoadingPage;
