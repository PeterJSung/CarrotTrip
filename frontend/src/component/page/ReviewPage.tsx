import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import CommonBtn from 'component/basic/common/CommonBtn';
import CommonRating from 'component/basic/common/CommonRating';
import ReviewLayout from 'component/container/ReviewLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultPageContainer from './DefaultPageContainer';

const BackButton = styled(IconButton)`
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const PlaceName = styled(Typography)`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    margin-top: 1rem;
`;

const RatingTitle = styled(Typography)`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.05em;
`;

const RatingComponent = styled(CommonRating)`
    margin-top: 0.625rem;
    margin: auto;
`;

const BackIcon = styled(ArrowBackIcon)`
    color: '#8E9095';
`;

const ImgTag = styled.img`
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
`;

const ReviewTextField = styled(TextField)`
    margin-top: 1rem;
    margin-bottom: 0.625rem;
`;

const ReviewIndicatorText = styled(Typography)`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: right;
`;

const WarningText = styled(Typography)`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.05em;
    color: #dc3a37;
    margin-bottom: 1.25rem;
`;

const ReviewPage = (): JSX.Element => {
    const nivagate = useNavigate();
    const [rating, setRating] = useState<number>(0);
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
                <ReviewLayout />
            </Box>
            <Box display="flex" m="1.25rem 1.25rem 1.625rem" flexDirection="column">
                <WarningText>
                    해당 장소와 무관한 내용이나 동일 문자의 반복 등 부적합한 내용은 사전경고없이 삭제될 수 있습니다.
                </WarningText>
                <CommonBtn
                    style={{
                        height: '3rem',
                    }}
                    isBlack={true}
                    onClick={console.log}
                >
                    확인
                </CommonBtn>
            </Box>
        </DefaultPageContainer>
    );
};

export default ReviewPage;
