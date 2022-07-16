import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BackButton = styled(IconButton)`
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const BackIcon = styled(ArrowBackIcon)`
    color: '#8E9095';
`;

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
            <BackButton onClick={() => props.onClick(false)}>
                <BackIcon />
            </BackButton>
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
