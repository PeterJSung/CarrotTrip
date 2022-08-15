import { Box, Typography } from '@mui/material';
import BackArrowBtn from 'component/basic/common/BackArrowBtn';
import CommonBtn from 'component/basic/common/CommonBtn';
import ReviewLayout from 'component/layout/ReviewLayout';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reviewInfoSelector } from 'redux/review';
import styled from 'styled-components';
import { UpdateReviewVO } from 'vo/review';
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

type ReqParams = 'placeName' | 'contentTypeId' | 'src';

type ReqSet = Pick<UpdateReviewVO, ReqParams>;
type ChangeSet = Omit<UpdateReviewVO, ReqParams>;

const ReviewPage = (): JSX.Element => {
    const { t } = useTranslation();
    const reviewInfoData = useSelector(reviewInfoSelector);
    const nivagate = useNavigate();

    const [reqData, setReqData] = useState<ReqSet>({
        placeName: '',
        contentTypeId: 0,
    });

    const [changeData, setChangeData] = useState<ChangeSet>({
        rating: 1,
        reviewText: '',
    });

    useEffect(() => {
        if (reviewInfoData) {
            setReqData({
                placeName: reviewInfoData.placeName,
                contentTypeId: reviewInfoData.contentTypeId,
                src: reviewInfoData.src,
            });

            setChangeData({
                rating: reviewInfoData.rating,
                reviewText: reviewInfoData.reviewText,
            });
        }
    }, [reviewInfoData]);

    const onClickBackBtn = () => {
        nivagate(-1);
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
                    onClick={console.log}
                >
                    {t('common.confirm')}
                </CommonBtn>
            </Box>
        </DefaultPageContainer>
    );
};

export default ReviewPage;
