import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { PlaceReviewDataset } from 'vo/placeInfo';
import ReviewItem from './ReviewItem';

interface PlaceDetailReviewListProps {
    placeName: string;
    myComment?: PlaceReviewDataset;
    remainComment: PlaceReviewDataset[];
}

const ReviewTitle = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #111313;
    margin-bottom: 1.25rem;
`;

const ListContainer = styled(Box)`
    & > div {
        margin-bottom: 2.25rem;
    }
`;

const GuideTopy = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #111313;
`;

const PopupContainer = (props: { placeName: string; onClick: () => void }) => {
    const { t } = useTranslation();
    return (
        <Box px="1.25rem" py="1rem" borderRadius="0.5rem" boxShadow="0px 12px 30px rgba(0, 0, 0, 0.12)" mb="2.5rem">
            <GuideTopy>{t('review.createguide', { name: props.placeName })}</GuideTopy>
        </Box>
    );
};

const PlaceDetailReviewList = (props: PlaceDetailReviewListProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Box px="1.25rem" pt="2.5rem">
            {props.myComment ? <></> : <PopupContainer placeName={props.placeName} onClick={console.log} />}
            <ReviewTitle>{t('review.title')}</ReviewTitle>
            <ListContainer>
                {props.myComment && (
                    <ReviewItem
                        date={props.myComment.regDt.split(' ')[0]}
                        reviewText={props.myComment.comments}
                        score={props.myComment.score}
                        userName={props.myComment.memberNickname}
                        key={`${props.myComment.memberNickname}-${props.myComment.regDt}`}
                        onPopupCallback={console.log}
                    />
                )}
                {props.remainComment.map((d) => {
                    console.log(d);
                    return (
                        <ReviewItem
                            date={d.regDt.split(' ')[0]}
                            reviewText={d.comments}
                            score={d.score}
                            userName={d.memberNickname}
                            key={`${d.memberNickname}-${d.regDt}`}
                        />
                    );
                })}
            </ListContainer>
        </Box>
    );
};

export default PlaceDetailReviewList;
