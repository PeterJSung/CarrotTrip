import { Alert, Snackbar } from '@mui/material';
import ReviewLayout from 'component/layout/ReviewLayout';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { registerReviewThunk, reviewInfoSelector } from 'redux/review';
import { getUserName } from 'redux/userInfo';
import { UpdateReviewVO } from 'vo/review';
import { PATH_HOME_PAGE } from './common';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

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

    const onBackButtonClick = () => {
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

    const onBottomButtonClick = async () => {
        if (changeData.rating !== 0 && changeData.reviewText.trim().length >= 20) {
            await registerReview(userName, changeData.reviewText, changeData.rating, reqData.contentId);
            onBackButtonClick();
        } else {
            setSnakOpen(true);
        }
    };

    return (
        <CommonHeaderFooterComponent
            buttonText={t('review.genreviewbtn')}
            titleText={t('reviewedit.title')}
            onBackButtonClick={onBackButtonClick}
            onBottomButtonClick={onBottomButtonClick}
        >
            <ReviewLayout onRatingChange={onRatingChange} onTextChange={onReviewChange} {...reqData} {...changeData} />
            <Snackbar open={snakOpen} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {t('review.requireerror')}
                </Alert>
            </Snackbar>
        </CommonHeaderFooterComponent>
    );
};

export default ReviewPage;
