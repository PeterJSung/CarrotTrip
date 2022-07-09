import { Box } from '@mui/material';
import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const SIDE_MARGIN = 1.25;
const TOP_MARGIN = 2.81;

const IndicatorWrapper = styled(Box)`
    display: flex;
    top: ${TOP_MARGIN}rem;
    position: absolute;
    right: ${SIDE_MARGIN}rem;
    left: ${SIDE_MARGIN}rem;
    justify-content: space-between;
`;

const IndicatorCommon = (props: PropsWithChildren<any>): JSX.Element => {
    return <IndicatorWrapper>{props.children}</IndicatorWrapper>;
};

export default IndicatorCommon;
