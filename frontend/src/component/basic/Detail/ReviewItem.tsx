import { Box, Chip, Divider, IconButton, Popover } from '@mui/material';
import { MouseEvent, useState } from 'react';
import ClampLines from 'react-clamp-lines';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import AvartarGenerator from '../common/AvartarGenerator';
import CommonRating from '../common/CommonRating';
// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx
export interface ReviewItemProps {
    onPopupCallback?: (actionType: 'modify' | 'delete') => void;
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
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
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
    margin-left: 0.25rem;
`;

const InformDivider = styled(Divider)`
    margin-left: 0.375rem !important;
    margin-right: 0.5rem !important;
    margin-top: 0.15rem !important;
    margin-top: 0.15rem !important;
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

const EditIcon = () => (
    <svg
        style={{ marginTop: 'auto', marginBottom: 'auto' }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M8 13.3333H14" stroke="#8E9095" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M11 2.3334C11.2652 2.06819 11.6249 1.91919 12 1.91919C12.1857 1.91919 12.3696 1.95577 12.5412 2.02684C12.7128 2.09791 12.8687 2.20208 13 2.3334C13.1313 2.46472 13.2355 2.62063 13.3066 2.79221C13.3776 2.96379 13.4142 3.14769 13.4142 3.3334C13.4142 3.51912 13.3776 3.70302 13.3066 3.8746C13.2355 4.04618 13.1313 4.20208 13 4.3334L4.66667 12.6667L2 13.3334L2.66667 10.6667L11 2.3334Z"
            stroke="#8E9095"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const DeleteIcon = () => (
    <svg
        style={{ marginTop: 'auto', marginBottom: 'auto' }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M2 4H3.33333H14" stroke="#8E9095" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M12.6666 3.99992V13.3333C12.6666 13.6869 12.5261 14.026 12.2761 14.2761C12.026 14.5261 11.6869 14.6666 11.3333 14.6666H4.66659C4.31296 14.6666 3.97382 14.5261 3.72378 14.2761C3.47373 14.026 3.33325 13.6869 3.33325 13.3333V3.99992M5.33325 3.99992V2.66659C5.33325 2.31296 5.47373 1.97382 5.72378 1.72378C5.97382 1.47373 6.31296 1.33325 6.66659 1.33325H9.33325C9.68687 1.33325 10.026 1.47373 10.2761 1.72378C10.5261 1.97382 10.6666 2.31296 10.6666 2.66659V3.99992"
            stroke="#8E9095"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M6.66675 7.33325V11.3333" stroke="#8E9095" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.33325 7.33325V11.3333" stroke="#8E9095" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PopupTextTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #222222;
    margin-left: 0.75rem;
`;

const ListWrapper = styled.div`
    padding: 0.75rem;
    display: flex;
`;

const ReviewItem = (props: ReviewItemProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isMyReview = !!props.onPopupCallback;
    const { t } = useTranslation();

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Box display="flex">
            <Box mr="1rem">
                <AvartarGenerator sz={3} id={props.userName} />
            </Box>

            <Box display="flex" flexDirection="column" flexGrow="1">
                <Box display="flex" mb="0.5rem">
                    <Box display="flex" flexGrow="1" flexDirection="column">
                        <Box display="flex" mb="0.25rem">
                            {isMyReview && <MyChip style={{ marginRight: '0.25rem' }} label={t('review.myreview')} />}
                            <UserNameTypo>{props.userName}</UserNameTypo>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <DateTypo>{props.date}</DateTypo>
                            <InformDivider orientation="vertical" flexItem />
                            <CommonRating ratingsize="small" value={props.score} />
                            <ScoreTypo>{props.score}</ScoreTypo>
                        </Box>
                    </Box>
                    {isMyReview && (
                        <Box display="flex" alignItems="center">
                            <IconButton onClick={handleClick}>
                                <DotIcon />
                            </IconButton>
                        </Box>
                    )}
                </Box>

                <ReviewClampLine id={`${props.userName}-${props.date}`} text={props.reviewText} lines={3} />
                <Popover
                    id={id}
                    anchorEl={anchorEl}
                    onClose={() => handleClose()}
                    open={open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box display="flex" flexDirection="column" minWidth="7.375rem">
                        <ListWrapper onClick={() => props.onPopupCallback?.('modify')}>
                            <EditIcon />
                            <PopupTextTypo>{t('review.modify')}</PopupTextTypo>
                        </ListWrapper>
                        <Divider />
                        <ListWrapper onClick={() => props.onPopupCallback?.('delete')}>
                            <DeleteIcon />
                            <PopupTextTypo>{t('review.delete')}</PopupTextTypo>
                        </ListWrapper>
                    </Box>
                </Popover>
            </Box>
        </Box>
    );
};

export default ReviewItem;
