import { Alert, Box, Snackbar, Typography } from '@mui/material';
import BackArrowBtn from 'component/basic/common/BackArrowBtn';
import CommonBtn from 'component/basic/common/CommonBtn';
import ReviewLayout from 'component/layout/ReviewLayout';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { registerReviewThunk, reviewInfoSelector } from 'redux/review';
import { getUserName } from 'redux/userInfo';
import styled from 'styled-components';
import { UpdateReviewVO } from 'vo/review';
import { PATH_HOME_PAGE } from './common';
import DefaultPageContainer from './DefaultPageContainer';

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

type ReqParams = 'placeName' | 'contentTypeId' | 'src' | 'contentId';

type ReqSet = Pick<UpdateReviewVO, ReqParams>;
type ChangeSet = Omit<UpdateReviewVO, ReqParams>;

const ReviewPage = (): JSX.Element => {
    const { t } = useTranslation();
    const reviewInfoData = useSelector(reviewInfoSelector);
    const userName = useSelector(getUserName);
    const navigate = useNavigate();
    const registerReview = useThunk(registerReviewThunk);

    const [snakOpen, setSnakOpen] = useState<boolean>(false);

    const [reqData, setReqData] = useState<ReqSet>({
        contentId: 0,
        placeName: '',
        contentTypeId: 0,
    });

    const [changeData, setChangeData] = useState<ChangeSet>({
        rating: 0,
        reviewText: '',
    });

    useEffect(() => {
        if (reviewInfoData) {
            setReqData({
                contentId: reviewInfoData.contentId,
                placeName: reviewInfoData.placeName,
                contentTypeId: reviewInfoData.contentTypeId,
                src: reviewInfoData.src,
            });

            setChangeData({
                rating: reviewInfoData.rating,
                reviewText: reviewInfoData.reviewText,
            });
        } else {
            navigate(PATH_HOME_PAGE);
        }
    }, [reviewInfoData]);

    const onClickBackBtn = () => {
        navigate(-1);
    };

    const onRatingChange = (rating: number) => {
        setChangeData({
            ...changeData,
            rating,
        });
    };

    const onReviewChange = (reviewText: string) => {
        setChangeData({
            ...changeData,
            reviewText,
        });
    };

    const handleClose = () => {
        setSnakOpen(false);
    };

    const onReviewSubmit = async () => {
        if (changeData.rating !== 0 && changeData.reviewText.trim().length >= 20) {
            await registerReview(userName, changeData.reviewText, changeData.rating, reqData.contentId);
            onClickBackBtn();
        } else {
            setSnakOpen(true);
        }
    };

    return (
        <DefaultPageContainer>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <BackArrowBtn onClick={onClickBackBtn} />
            </Box>
            <Box flexGrow="1">
                <ReviewLayout
                    onRatingChange={onRatingChange}
                    onTextChange={onReviewChange}
                    {...reqData}
                    {...changeData}
                />
            </Box>
            <Box display="flex" m="1.25rem 1.25rem 1.625rem" flexDirection="column">
                <WarningText>{t('reviewpage.warning')}</WarningText>
                <CommonBtn
                    style={{
                        height: '3rem',
                    }}
                    isBlack={true}
                    onClick={onReviewSubmit}
                >
                    {t('common.confirm')}
                </CommonBtn>
            </Box>
            <Snackbar open={snakOpen} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {t('review.requireerror')}
                </Alert>
            </Snackbar>
        </DefaultPageContainer>
    );
};

export default ReviewPage;
