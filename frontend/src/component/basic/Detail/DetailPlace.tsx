import { Box, Divider } from '@mui/material';
import DetailBubbleChart from 'component/basic/Detail/DetailBubbleChart';
import DetailMBTI from 'component/basic/Detail/DetailMBTI';
import PlaceAdressDetail from 'component/basic/Detail/PlaceAdressDetail';
import PlaceDescriptionDetail from 'component/basic/Detail/PlaceDescriptionDetail';
import { PATH_REVIEW_PAGE } from 'component/page/common';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { registerReviewThunk, updateReviewThunk } from 'redux/review';
import { getUserName } from 'redux/userInfo';
import styled from 'styled-components';
import { PlaceBookmarkInfo, PlaceReviewDataset } from 'vo/placeInfo';
import { contentIdMapper } from 'vo/travelInfo';
import PlaceDetailReviewList from './PlaceDetailReviewList';

export interface DetailPlaceProps {
    userName: string;
    contentId: number;
    src?: string;
    type: number;
    name: string;
    description: string;
    address: string;
    tasteList: string[];
    mbtiArr: PlaceBookmarkInfo[];
    comments: PlaceReviewDataset[];
    onReset: () => void;
}

const ImgTag = styled.img`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ItemContainer = styled(Box)`
    & > :not(hr):first-child {
        padding: 1.25rem 1.25rem 1.5rem;
    }
    & > :not(hr):not(:first-child) {
        padding: 1.5rem 1.25rem 1.5rem;
    }
`;

type ExtractorCommentType = { myComment?: PlaceReviewDataset; remainComment: PlaceReviewDataset[] };

const extractorMyComment = (comments: PlaceReviewDataset[], userName: string): ExtractorCommentType => {
    const ret: ExtractorCommentType = {
        remainComment: [],
    };
    comments.forEach((d) => {
        if (d.memberNickname === userName) {
            ret.myComment = d;
        } else {
            ret.remainComment.push(d);
        }
    });
    return ret;
};

const DetailPlace = (props: DetailPlaceProps): JSX.Element => {
    const { t } = useTranslation();
    const updateReviewInfo = useThunk(updateReviewThunk);
    const userName = useSelector(getUserName);
    const registerReview = useThunk(registerReviewThunk);
    const navigateCB = useNavigate();
    const { myComment, remainComment } = extractorMyComment(props.comments, props.userName);

    const type = t(contentIdMapper[props.type].translateKey);

    const onReviewCreate = () => {
        updateReviewInfo({
            contentId: props.contentId,
            placeName: props.name,
            contentTypeId: props.type,
            reviewText: myComment ? myComment.comments : '',
            rating: myComment ? myComment.score : 0,
            src: props.src,
        });
        navigateCB(PATH_REVIEW_PAGE);
    };

    const onReviewDelete = async () => {
        myComment && (await registerReview(userName, '', myComment.score, myComment.apiId));
        props.onReset();
    };

    return (
        <Box>
            {props.src ? (
                <Box height="11rem">
                    <ImgTag src={props.src} />
                </Box>
            ) : (
                <></>
            )}
            <ItemContainer>
                <PlaceDescriptionDetail placeType={type} placeName={props.name} placeDesc={props.description} />
                <Divider />
                <PlaceAdressDetail address={props.address} />
                <Divider />
                {props.tasteList.length > 0 ? (
                    <>
                        <DetailBubbleChart tasteList={props.tasteList} />
                        <Divider />
                    </>
                ) : (
                    <></>
                )}
                {props.mbtiArr.length > 0 ? (
                    <>
                        <DetailMBTI mbtiArr={props.mbtiArr} />
                        <Divider />
                    </>
                ) : (
                    <></>
                )}

                <PlaceDetailReviewList
                    onReveiwDelete={onReviewDelete}
                    onReveiwCreate={onReviewCreate}
                    placeName={props.name}
                    myComment={myComment}
                    remainComment={remainComment}
                />
            </ItemContainer>
        </Box>
    );
};

export default DetailPlace;
