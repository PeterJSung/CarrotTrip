import { Box, Button, Divider, Rating, Typography } from '@mui/material';
import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionInfo, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { YELLOW_COLOR } from 'globaltheme';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ExpandableBanner from './ExpandableBanner';

export interface SignupBannerContainerProps {
    upperText: string;
    lowerText: string;
    id: number;
}

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

const SignupBannerContainer = (props: SignupBannerContainerProps): JSX.Element => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    const { t } = useTranslation();
    const [chipData, setChipData] = useState<SelectChipVO[]>(getImpressionInfo(t));
    const [rating, setRating] = useState<number>(0);

    const onBannerClick = () => {
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
        setRating(0);
    };

    const onChipClick = (id: number) => {
        const nextData = chipData.map((data) => {
            const ret = { ...data };
            ret.code === id && (ret.checked = !ret.checked);
            return ret;
        });
        setChipData(nextData);
    };
    console.log(`Render Signup Banner`);
    return (
        <ExpandableBanner
            isFilled={false}
            lowerText={props.upperText}
            upperText={props.lowerText}
            onClick={onBannerClick}
            isExpand={isExpand}
        >
            <Box px="1rem" pt="1rem">
                <MenuTypo>얼마나 만족스러웠나요?</MenuTypo>
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
                <ConfirmBtn>확인</ConfirmBtn>
            </Box>
        </ExpandableBanner>
    );
};

export default memo(SignupBannerContainer);
