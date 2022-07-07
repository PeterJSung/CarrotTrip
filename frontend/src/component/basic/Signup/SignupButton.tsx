import { Button, ButtonProps, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

const ClickButton = styled(Button)`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    color: white;
    background-color: #111313;
    //color: white;
    &:hover {
        background-color: #111313af;
    }
    &.Mui-disabled {
        background-color: #c2c2c2 !important;
    }
`;

const SignupButton = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
    return <ClickButton {...props}>{props.children}</ClickButton>;
};

export default SignupButton;
