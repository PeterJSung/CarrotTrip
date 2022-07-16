import { Box, TextField, Typography } from '@mui/material';
import CommonRating from 'component/basic/common/CommonRating';
import PlaceInfoChip from 'component/basic/common/PlaceInfoChip';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getPlaceBasicInfo } from 'redux/placeInfo';
import styled from 'styled-components';

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

const ImgTag = styled.img`
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
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

const ReviewLayout = (): JSX.Element => {
    const [rating, setRating] = useState<number>(0);
    const [reviewText, setReviewText] = useState<string>('');
    const placeBasicInfo = useSelector(getPlaceBasicInfo);

    const { t } = useTranslation();
    const reviewChange = (event: any) => {
        const currentReview: string = event.target.value;
        setReviewText(currentReview);
    };

    return (
        <>
            <Box height="7rem" display="flex" px="1.25rem" pb="1.5rem" pt="0.5rem" justifyContent="space-between">
                <Box flex="1" maxWidth="100%" maxHeight="100%" mr="0.75rem">
                    <ImgTag src="https://picsum.photos/800" />
                </Box>
                <Box flex="1.3" flexDirection="column">
                    <PlaceName>{placeBasicInfo.placename}</PlaceName>
                    <PlaceInfoChip label={placeBasicInfo.placeType} />
                </Box>
            </Box>

            <Box display="flex" px="1.25rem" py="1.5rem" flexDirection="column">
                <RatingTitle>{t('review.rating')}</RatingTitle>
                <RatingComponent
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue ?? 0);
                    }}
                />
            </Box>

            <Box display="flex" px="1.25rem" py="1.5rem" flexDirection="column">
                <RatingTitle>{t('review.write')}</RatingTitle>
                <ReviewTextField multiline minRows={10} placeholder={t('review.placeholder')} onChange={reviewChange} />
                <ReviewIndicatorText>{t('review.limit', { length: reviewText.length })}</ReviewIndicatorText>
            </Box>
        </>
    );
};

export default ReviewLayout;
