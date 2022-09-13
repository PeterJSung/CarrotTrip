import { Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/globalloader';

const GlobalLoaderContainer = (): JSX.Element => {
    const isLoding = useSelector(isLoadingSelector);
    if (!isLoding) {
        return <></>;
    }

    return (
        <Box
            zIndex="3500"
            position="fixed"
            right="0"
            left="0"
            bottom="0"
            top="0"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="rgba(0,0,0,0.5)"
        >
            <CircularProgress
                style={{
                    color: '#FDF32F',
                }}
                size={50}
                thickness={5}
            />
        </Box>
    );
};

export default GlobalLoaderContainer;
