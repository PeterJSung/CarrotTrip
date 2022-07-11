import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultPageContainer from './DefaultPageContainer';

const BackButton = styled(IconButton)`
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const BackIcon = styled(ArrowBackIcon)`
    color: '#8E9095';
`;

const ImgTag = styled.img`
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
`;

const ReviewPage = (): JSX.Element => {
    const nivagate = useNavigate();

    const onClickBackBtn = () => {
        nivagate(-1);
    };

    return (
        <DefaultPageContainer>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <BackButton onClick={onClickBackBtn}>
                    <BackIcon />
                </BackButton>
            </Box>
            <Box flexGrow="1">
                <Box height="7rem" display="flex" px="1.25rem" pb="1.5rem" pt="0.5rem" justifyContent="space-between">
                    <Box flex="1" maxWidth="100%" maxHeight="100%" mr="1rem">
                        <ImgTag src="https://picsum.photos/800" />
                    </Box>
                    <Box flexGrow="1.2" flexDirection="column">
                        <div>2</div>
                    </Box>
                </Box>
            </Box>
        </DefaultPageContainer>
    );
};

export default ReviewPage;
