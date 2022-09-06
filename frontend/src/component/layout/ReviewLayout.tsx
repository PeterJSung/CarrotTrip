import { Box, TextField, Typography } from '@mui/material';
import CommonRating from 'component/basic/common/CommonRating';
import NonSrcIcon from 'component/basic/common/NonSrcIcon';
import PlaceInfoChip from 'component/basic/common/PlaceInfoChip';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { UpdateReviewVO } from 'vo/review';
import { contentIdMapper } from 'vo/travelInfo';

export type ReviewLayoutProps = {
    onTextChange: (text: string) => void;
    onRatingChange: (rating: number) => void;
} & UpdateReviewVO;

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

const ImgTag = styled.img`
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
`;

const ReviewLayout = (props: ReviewLayoutProps): JSX.Element => {
    const { t } = useTranslation();
    const label = contentIdMapper[props.contentTypeId] ? t(contentIdMapper[props.contentTypeId].translateKey) : '';
    return (
        <Box px="1.25rem">
            <Box height="7rem" display="flex" pb="1.5rem" pt="0.5rem">
                <Box
                    borderRadius="0.5rem"
                    flex="1"
                    maxWidth="100%"
                    maxHeight="100%"
                    mr="0.75rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border={props.src ? 'unset' : '1px solid black'}
                >
                    {props.src ? <ImgTag src={props.src} /> : <NonSrcIcon contentId={props.contentTypeId} />}
                </Box>
                <Box flex="1.3" flexDirection="column">
                    <PlaceName>{props.placeName}</PlaceName>
                    <PlaceInfoChip label={label} />
                </Box>
            </Box>

            <Box display="flex" py="1.5rem" flexDirection="column">
                <RatingTitle>{t('review.rating')}</RatingTitle>
                <RatingComponent
                    ratingsize="big"
                    value={props.rating}
                    onChange={(event, newValue) => {
                        props.onRatingChange(newValue ?? 0);
                    }}
                />
            </Box>

            <Box display="flex" py="1.5rem" flexDirection="column">
                <RatingTitle>{t('review.write')}</RatingTitle>
                <ReviewTextField
                    multiline
                    value={props.reviewText}
                    minRows={10}
                    placeholder={t('review.placeholder')}
                    onChange={(e) => props.onTextChange(e.target.value)}
                />
                <ReviewIndicatorText>
                    {t('review.limit', { length: props.reviewText.trim().length })}
                </ReviewIndicatorText>
            </Box>
            <WarningText>{t('reviewpage.warning')}</WarningText>
        </Box>
    );
};

export default ReviewLayout;
