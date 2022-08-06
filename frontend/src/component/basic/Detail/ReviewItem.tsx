import { Box, Chip } from '@mui/material';
import ClampLines from 'react-clamp-lines';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx
export interface ReviewItemProps {
    isMyReview?: boolean;
    reviewText: string;
    date: string;
    userName: string;
    score: number;
}

const MyChip = styled(Chip)`
    text-align: center;
    width: 3.5rem !important;
    height: 1.5rem !important;
    background-color: #e2e9ff !important;
    border-radius: 0.25rem !important;
    & > .MuiChip-label {
        padding: 0 !important;
        color: #0066ff;
        font-family: Noto Sans KR !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 10px !important;
        line-height: 14px !important;
        letter-spacing: -0.05em !important;
    }
`;

const UserNameTypo = styled.span`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0.25rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.05em;
    color: #191919;
`;

const DateTypo = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #8e9095;
`;

const ReviewClampLine = styled(ClampLines)`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.05em;
    color: #111313;
    word-wrap: break-word;
    & > .clamp-lines__button {
        margin-top: 0.375rem;
        font-family: Noto Sans KR;
        font-style: normal;
        background: none;
        border: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 17px;
        color: #8e9095;
        padding: 0;
    }
`;

const ScoreTypo = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #8e9095;
`;

const VerticalDivider = styled.div`
    display: inline-block;
    border: 1px solid rgba(234, 234, 234, 1);
`;

const DotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="#C2C2C2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="#C2C2C2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="#C2C2C2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ReviewItem = (props: ReviewItemProps): JSX.Element => {
    const isMyReview = !!props.isMyReview;
    const { t } = useTranslation();
    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" mb="0.5rem">
                <Box display="flex" flexGrow="1" flexDirection="column">
                    <Box display="flex" mb="0.25rem">
                        {isMyReview && <MyChip label={t('review.myreview')} />}
                        <UserNameTypo>{props.userName}</UserNameTypo>
                    </Box>
                    <Box>
                        <DateTypo>{props.date}</DateTypo>
                        <VerticalDivider />
                        <ScoreTypo>{props.score}</ScoreTypo>
                    </Box>
                </Box>
                {isMyReview && (
                    <Box display="flex" alignItems="center">
                        <DotIcon />
                    </Box>
                )}
            </Box>

            <ReviewClampLine id={`${props.userName}-${props.date}`} text={props.reviewText} lines={3} />
        </Box>
    );
};

export default ReviewItem;
