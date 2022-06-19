import { Box, ButtonBase, Typography } from '@mui/material';
import styled from 'styled-components';
import { SelectBoxVO } from './signupconstants';

export type SelectSquareBoxProps = {
    onClick: (id: string) => void;
} & SelectBoxVO;

const ButtonWrapper = styled(ButtonBase)`
    position: relative !important;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem !important;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
`;

const TextTypo = styled(Typography)`
    position: absolute;
    left: 0.3rem;
    bottom: 0.2rem;
    color: white;
    z-index: 3;
`;

const BlackPanel = styled(Box)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
`;

const CHECKED_SIZE = 1;

const CheckedWrapper = styled(Box)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: ${CHECKED_SIZE}rem;
    height: ${CHECKED_SIZE}rem;
    border-radius: 0.17rem;
    background-color: black;
    z-index: 3;
`;

const Vsvg = (): JSX.Element => (
    <svg
        width={9 * CHECKED_SIZE}
        height={6 * CHECKED_SIZE}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1 3.5L4.5 7L10.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SelectSquareBox = (props: SelectSquareBoxProps): JSX.Element => {
    return (
        <ButtonWrapper
            style={{
                backgroundImage: `url(${props.src})`,
            }}
            onClick={() => props.onClick('1')}
        >
            {props.checked && (
                <>
                    <CheckedWrapper>
                        <Vsvg />
                    </CheckedWrapper>
                    <BlackPanel />
                </>
            )}
            <TextTypo>{props.title}</TextTypo>
        </ButtonWrapper>
    );
};

export default SelectSquareBox;
