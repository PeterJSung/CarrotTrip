import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, CircularProgress } from '@mui/material';
import styled from 'styled-components';

interface LoadingImgProps {
    isDone: boolean;
}

const ImgLoading = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const LoadingImg = (props: LoadingImgProps): JSX.Element => (
    <Box width="15rem" height="15rem" position="relative">
        <ImgLoading src="assets/signup/loading.png" />
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            {props.isDone ? (
                <TaskAltIcon
                    style={{
                        color: '#2E7D32',
                        width: '3rem',
                        height: '3rem',
                        zIndex: 2,
                        marginTop: '-25%',
                    }}
                />
            ) : (
                <CircularProgress
                    style={{
                        marginTop: '-25%',
                    }}
                    color="secondary"
                />
            )}
        </Box>
    </Box>
);

export default LoadingImg;
