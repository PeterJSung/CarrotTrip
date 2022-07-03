import { Box } from '@mui/material';
import styled from 'styled-components';
import { CHECKED_DIM_OP, UNCHECKED_DIM_OP } from '../Signup/signupconstants';

export interface BlackPanelProps {
    black: boolean;
}

const Pannel = styled(Box)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    z-index: 1;
`;

const BlackPanel = (props: BlackPanelProps): JSX.Element => {
    return (
        <Pannel
            style={{
                opacity: props.black ? CHECKED_DIM_OP : UNCHECKED_DIM_OP,
            }}
        />
    );
};

export default BlackPanel;
