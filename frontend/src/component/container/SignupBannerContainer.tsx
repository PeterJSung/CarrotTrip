import { Box, Button, Divider, Rating, Typography } from '@mui/material';
import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionInfo, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { YELLOW_COLOR } from 'globaltheme';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThunk } from 'redux/common';
import { updateInfo2Banner } from 'redux/signupInfo';
import styled from 'styled-components';
import { EvaluationAreaRes, TourAreaInfo } from 'vo/signup';
import ExpandableBanner from './ExpandableBanner';

const MenuTypo = styled(Typography)`
    font-family: Noto Sans KR !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 13px !important;
    line-height: 19px !important;
    margin-bottom: 0.8rem !important;
`;

const YellowRating = styled(Rating)`
    & .MuiRating-iconFilled {
        color: ${YELLOW_COLOR} !important;
    }
`;

const SkipTypo = styled(Typography)`
    font-family: Noto Sans KR !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 17px !important;
    color: #6d6d6d !important;
    text-decoration-line: underline !important;
`;

const ConfirmBtn = styled(Button)`
    border-radius: 0.5rem !important;
    border: solid 0.15rem black !important;
    color: black !important;
`;

const SignupBannerContainer = (props: EvaluationAreaRes): JSX.Element => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const { t } = useTranslation();
    const [chipData, setChipData] = useState<SelectChipVO[]>(getImpressionInfo(t));
    const [rating, setRating] = useState<number>(0);
    const updateCurrentBanner = useThunk(updateInfo2Banner);

    const onBannerClick = () => {
        if (isExpand) {
            uploadData(); // isExpand 일때만 upload
        }
        setIsExpand(!isExpand);
    };

    const resetClick = () => {
        const nextData = chipData.map((data) => {
            const ret = { ...data };
            ret.checked = false;
            return ret;
        });
        setChipData(nextData);
        setIsExpand(false);
        setIsFilled(false);
        setRating(0);
        updateCurrentBanner(props.contentId, {
            score: 0,
            attraction: [],
        });
    };

    const onChipClick = (id: number) => {
        const nextData = chipData.map((data) => {
            const ret = { ...data };
            ret.code === id && (ret.checked = !ret.checked);
            return ret;
        });
        setChipData(nextData);
    };

    const confirmClick = () => {
        setIsExpand(false);
        uploadData();
    };

    const uploadData = () => {
        const notFilled = rating === 0;
        const nextData: TourAreaInfo = {
            score: rating,
            attraction: notFilled ? [] : chipData.filter((d) => d.checked).map((d) => d.code), // must skip when ration is default value
        };
        setIsFilled(!notFilled);
        updateCurrentBanner(props.contentId, nextData);
        console.log(`Upload ${props.name}`);
    };

    return (
        <ExpandableBanner
            src={props.thumbnail1}
            isFilled={isFilled}
            lowerText={props.address}
            upperText={props.name}
            onClick={onBannerClick}
            isExpand={isExpand}
        >
            <Box px="1rem" pt="1rem">
                <MenuTypo>
                    얼마나 만족스러웠나요?
                    <span
                        style={{
                            color: 'red',
                        }}
                    >
                        *필수입력
                    </span>
                </MenuTypo>
                <YellowRating
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue ?? 0);
                    }}
                />
                <Box mt="1.8rem">
                    <MenuTypo>해당 여행지의 인상은 어떤가요?</MenuTypo>

                    <SelectChipDisplay data={chipData} onClick={onChipClick} />
                </Box>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" py="0.5rem" px="1rem">
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <SkipTypo onClick={resetClick}>넘어가기</SkipTypo>
                </Box>
                <ConfirmBtn onClick={confirmClick}>확인</ConfirmBtn>
            </Box>
        </ExpandableBanner>
    );
};

export default memo(SignupBannerContainer);
