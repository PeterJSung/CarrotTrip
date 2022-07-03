import { Box } from '@mui/material';
import styled from 'styled-components';

export interface CheckerProps {
    checked: boolean;
}

const CHECKED_SIZE = 1;

const CheckedWrapper = styled(Box)`
    width: ${CHECKED_SIZE}rem;
    height: ${CHECKED_SIZE}rem;
    border-radius: 0.17rem;
    background-color: black;
    position: relative;
`;

const Vsvg = (): JSX.Element => (
    <svg
        style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
        }}
        width={9 * CHECKED_SIZE}
        height={6 * CHECKED_SIZE}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1 3.5L4.5 7L10.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Checker = (props: CheckerProps): JSX.Element => {
    if (!props.checked) {
        return <></>;
    }
    return (
        <CheckedWrapper>
            <Vsvg />
        </CheckedWrapper>
    );
};

export default Checker;
