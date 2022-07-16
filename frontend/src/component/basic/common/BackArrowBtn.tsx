import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, IconButtonProps } from '@mui/material';
import styled from 'styled-components';

const BackIcon = styled(ArrowBackIcon)`
    color: '#8E9095';
`;

const BackButtonWithPos = styled(IconButton)`
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const BackArrowBtn = (props: IconButtonProps) => (
    <BackButtonWithPos {...props}>
        <BackIcon />
    </BackButtonWithPos>
);

export default BackArrowBtn;
