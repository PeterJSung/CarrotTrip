import { Box, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const ImgLoading = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const LoadingImg = (): JSX.Element => (
    <Box width="15rem" height="15rem" position="relative">
        <ImgLoading src="assets/signup/loading.png" />
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress
                style={{
                    marginTop: '-25%',
                }}
                color="secondary"
            />
        </Box>
    </Box>
);

export default LoadingImg;
