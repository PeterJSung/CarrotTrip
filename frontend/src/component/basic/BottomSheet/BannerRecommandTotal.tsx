import { Box, Divider, Typography } from '@mui/material';
import { reAdjustmantKMnM } from 'common/util';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import BannerStarIcon from './BannerStarIcon';
import BannerWalkerIcon from './BannerWalkerIcon';
import CommonSheetBanner from './CommonSheetBanner';

export interface BannerRecommandTotalProps {
    score: number;
    distance: number;
    userName: string;
}

const CommonText = styled(Typography)`
    font-family: Noto Sans KR !important;
    font-style: normal !important;
    letter-spacing: -0.05em !important;
`;

const TitleText = styled(CommonText)`
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 23px !important;
`;

const DescriptionText = styled(CommonText)`
    font-weight: 400 !important;
    font-size: 13px !important;
    line-height: 19px !important;
`;

const DetailText = styled(Typography)`
    font-family: Lato !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 14px !important;
    color: #8e9095 !important;
`;

const InformDivider = styled(Divider)`
    margin-left: 0.375rem !important;
    margin-right: 0.5rem !important;
`;

const BannerRecommandTotal = (props: BannerRecommandTotalProps): JSX.Element => {
    const { t } = useTranslation();
    const { unit, dist } = reAdjustmantKMnM(props.distance);
    return (
        <CommonSheetBanner>
            <Box display="flex" flexDirection="column">
                <Box display="flex">
                    <TitleText>{t('bottomsheet.totalcourse')}</TitleText>
                    <Box display="flex" my="auto" mr="auto">
                        <BannerStarIcon />
                        <DetailText>{`${props.score} (${t('bottomsheet.avg')})`}</DetailText>
                        <InformDivider orientation="vertical" flexItem />
                        <BannerWalkerIcon />
                        <DetailText>{`${dist}${unit}`}</DetailText>
                    </Box>
                </Box>
                <DescriptionText>{`${props.userName}님의 취향에 딱 맞춘 최적의 코스!`}</DescriptionText>
            </Box>
        </CommonSheetBanner>
    );
};

export default BannerRecommandTotal;
