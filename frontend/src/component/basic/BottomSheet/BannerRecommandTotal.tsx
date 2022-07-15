import { Box, Divider, Typography } from '@mui/material';
import styled from 'styled-components';
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

const StarIcon = (): JSX.Element => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.58022 1.15571C5.92586 0.345631 7.07414 0.345631 7.41978 1.15571L8.45669 3.58594C8.60486 3.93321 8.93598 4.16743 9.31278 4.19147L11.9727 4.36122C12.8887 4.41967 13.2486 5.57793 12.5272 6.14526L10.5751 7.68027C10.2608 7.92748 10.1239 8.33821 10.2272 8.72457L10.8643 11.1082C11.0955 11.9733 10.1605 12.6829 9.38951 12.2274L7.00871 10.8206C6.69491 10.6352 6.30509 10.6352 5.99129 10.8206L3.61049 12.2274C2.83954 12.6829 1.90446 11.9733 2.1357 11.1082L2.77283 8.72457C2.8761 8.33821 2.73925 7.92748 2.42488 7.68027L0.472837 6.14526C-0.248633 5.57793 0.11133 4.41967 1.02728 4.36122L3.68722 4.19147C4.06402 4.16743 4.39514 3.93322 4.54331 3.58594L5.58022 1.15571Z"
            fill="#FEF32F"
        />
    </svg>
);

const RunIcon = (): JSX.Element => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.38059 4.97017C8.92464 4.97017 9.36567 4.52913 9.36567 3.98508C9.36567 3.44104 8.92464 3 8.38059 3C7.83654 3 7.39551 3.44104 7.39551 3.98508C7.39551 4.52913 7.83654 4.97017 8.38059 4.97017Z"
            fill="#6D6D6D"
        />
        <path
            d="M8.86286 8.0583C8.98353 8.23956 9.16381 8.37698 9.37067 8.44593L10.6882 8.88528L11 7.95142L9.68245 7.51207L8.86336 6.28318C8.76805 6.14091 8.63757 6.0257 8.48459 5.94875L7.77829 5.59559C7.56816 5.49054 7.32729 5.4645 7.09956 5.5222L5.52688 5.91476C5.38884 5.94915 5.25988 6.013 5.14884 6.10193C5.03781 6.19086 4.94733 6.30277 4.88362 6.42996L4 8.19769L4.88116 8.63851L5.76478 6.87078L6.8597 6.59693L5.97115 10.7077L4.16155 11.9523L4.7196 12.764L6.52969 11.5189C6.73705 11.3761 6.88088 11.1618 6.93358 10.9155L7.18822 9.73934L8.42795 10.6693L8.88355 12.9473L9.84942 12.7537L9.39382 10.4747C9.34599 10.2373 9.21237 10.0258 9.01851 9.8807L7.9492 9.07885L8.26787 7.16532L8.86286 8.0583Z"
            fill="#6D6D6D"
        />
    </svg>
);

const BannerRecommandTotal = (props: BannerRecommandTotalProps): JSX.Element => {
    return (
        <CommonSheetBanner>
            <Box display="flex" flexDirection="column">
                <Box display="flex">
                    <TitleText>전체 코스보기</TitleText>
                    <Box display="flex" my="auto" mr="auto">
                        <StarIcon />
                        <DetailText>{`${props.score} (평균)`}</DetailText>
                        <InformDivider orientation="vertical" flexItem />
                        <RunIcon />
                        <DetailText>{`${props.distance}KM`}</DetailText>
                    </Box>
                </Box>
                <DescriptionText>{`${props.userName}님의 취향에 딱 맞춘 최적의 코스!`}</DescriptionText>
            </Box>
        </CommonSheetBanner>
    );
};

export default BannerRecommandTotal;
