import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton, styled, Typography } from '@mui/material';

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
    isSkip: boolean;
}

const SignupPageHeader = (props: SignupPageHeaderProps): JSX.Element => {
    console.log('header rerender');
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <BackButton onClick={() => props.onClick(false)}>
                <BackIcon />
            </BackButton>
            {props.isSkip ? <Typography>넘어가기</Typography> : <></>}
        </Box>
    );
};

export default SignupPageHeader;
