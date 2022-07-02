import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

const DefaultPageContainer = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Box flexDirection="column" display="flex" height="100%" justifyContent="space-between">
            {props.children}
        </Box>
    );
};

export default DefaultPageContainer;
