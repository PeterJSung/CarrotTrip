import { Button, ButtonProps } from '@mui/material';
import { BLACK_COLOR } from 'globaltheme';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface CommonBtnProps {
    onClick: () => void;
    isBlack: boolean;
}

const ConfirmBtn = styled(Button)<{ b: string }>`
    background-color: ${(p) => (p.b === 'true' ? BLACK_COLOR : 'white')};
    color: ${(p) => (p.b === 'true' ? 'white' : BLACK_COLOR)};
    border-radius: 0.5rem;
    border: ${(p) => (p.b === 'true' ? `0.0rem solid ${BLACK_COLOR}` : `0.15rem solid ${BLACK_COLOR}`)};
    &:hover {
        background-color: ${(p) => (p.b === 'true' ? 'rgba(25,25,25,0.75)' : `#1976d20a`)};
    }
    &.Mui-disabled {
        background-color: #c2c2c2 !important;
    }
`;

const CommonBtn = ({ isBlack, onClick, ...props }: PropsWithChildren<CommonBtnProps & ButtonProps>): JSX.Element => {
    return (
        <ConfirmBtn b={`${isBlack}`} onClick={onClick} {...props}>
            {props.children}
        </ConfirmBtn>
    );
};

export default CommonBtn;
