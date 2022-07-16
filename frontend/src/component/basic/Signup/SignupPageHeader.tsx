import { Box, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackArrowBtn from '../common/BackArrowBtn';

export interface SignupPageHeaderProps {
    onClick: (isNext: boolean) => void;
    onSkipClick: () => void;
    isSkip: boolean;
}

const SkipTypoWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1rem;
`;

const SignupPageHeader = (props: SignupPageHeaderProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <BackArrowBtn onClick={() => props.onClick(false)} />
            {props.isSkip ? (
                <SkipTypoWrapper onClick={props.onSkipClick}>
                    <Typography>{t('common.ignore')}</Typography>
                </SkipTypoWrapper>
            ) : (
                <></>
            )}
        </Box>
    );
};

export default SignupPageHeader;
