import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { contentIdMapper, specializeContentId } from 'vo/travelInfo';
import PlaceInfoChip from '../common/PlaceInfoChip';
import BannerStarIcon from './BannerStarIcon';
import CommonSheetBanner from './CommonSheetBanner';

export interface BannerSuggestionItemProps {
    placeName: string;
    rating: number;
    contentTypeId: number;
    src?: string;
    description: string;
}

const DEFAULT_ISZE = 5;

const ImgButton = styled.div`
    width: ${DEFAULT_ISZE}rem !important;
    height: ${DEFAULT_ISZE}rem !important;
    border-radius: 0.5rem !important;
    border: 0.5px solid black;
    overflow: hidden;
`;

const ImgDisplay = styled.img`
    width: 100%;
    height: 100%;
`;

const CommonText = styled(Typography)`
    font-family: Noto Sans KR !important;
    font-style: normal !important;
`;

const PlaceNameText = styled(CommonText)`
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 23px !important;
    letter-spacing: -0.05em !important;
    color: #191919 !important;
`;

const DescriptionText = styled(CommonText)`
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.05em;
    color: #6d6d6d;
    display: -webkit-box !important;
    -webkit-line-clamp: 1 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
`;

const RatingText = styled(CommonText)`
    font-family: Lato !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 14px !important;
    align-items: center !important;
    text-align: center !important;
    color: #8e9095 !important;
`;

const PlaceInfoChipCustom = styled(PlaceInfoChip)`
    margin-bottom: 0 !important;
`;

const TourIcon = () => (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="76" height="76" rx="8" fill="white" />
        <path d="M50.5 26H30.8125V23H28V53H30.8125V41H50.5L47.6875 33.5L50.5 26Z" fill="#191919" />
    </svg>
);

const RestorantIcon = () => (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="76" height="76" rx="8" fill="white" />
        <path
            d="M26.75 20.5C27.0815 20.5 27.3995 20.6317 27.6339 20.8661C27.8683 21.1005 28 21.4185 28 21.75V29.25C27.9996 30.0258 28.2398 30.7827 28.6876 31.4162C29.1353 32.0498 29.7686 32.5289 30.5 32.7875V21.75C30.5 21.4185 30.6317 21.1005 30.8661 20.8661C31.1005 20.6317 31.4185 20.5 31.75 20.5C32.0815 20.5 32.3995 20.6317 32.6339 20.8661C32.8683 21.1005 33 21.4185 33 21.75V32.7875C33.7314 32.5289 34.3647 32.0498 34.8124 31.4162C35.2602 30.7827 35.5004 30.0258 35.5 29.25V21.75C35.5 21.4185 35.6317 21.1005 35.8661 20.8661C36.1005 20.6317 36.4185 20.5 36.75 20.5C37.0815 20.5 37.3995 20.6317 37.6339 20.8661C37.8683 21.1005 38 21.4185 38 21.75V29.25C38.0003 30.6908 37.5028 32.0875 36.5916 33.2036C35.6805 34.3198 34.4117 35.0868 33 35.375V54.25C33 54.5815 32.8683 54.8995 32.6339 55.1339C32.3995 55.3683 32.0815 55.5 31.75 55.5C31.4185 55.5 31.1005 55.3683 30.8661 55.1339C30.6317 54.8995 30.5 54.5815 30.5 54.25V35.375C29.0883 35.0868 27.8195 34.3198 26.9084 33.2036C25.9972 32.0875 25.4997 30.6908 25.5 29.25V21.75C25.5 21.4185 25.6317 21.1005 25.8661 20.8661C26.1005 20.6317 26.4185 20.5 26.75 20.5ZM45.5 38V54.25C45.5 54.5815 45.6317 54.8995 45.8661 55.1339C46.1005 55.3683 46.4185 55.5 46.75 55.5C47.0815 55.5 47.3995 55.3683 47.6339 55.1339C47.8683 54.8995 48 54.5815 48 54.25V21.75C48 21.4185 47.8683 21.1005 47.6339 20.8661C47.3995 20.6317 47.0815 20.5 46.75 20.5C45.0925 20.5 43.5425 21.315 42.4275 22.4275C41.315 23.5425 40.5 25.0925 40.5 26.75V36.75C40.5 37.0815 40.6317 37.3995 40.8661 37.6339C41.1005 37.8683 41.4185 38 41.75 38H45.5Z"
            fill="#191919"
        />
    </svg>
);

const ShoppingIcon = () => (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="76" height="76" rx="8" fill="white" />
        <path
            d="M49.3636 28H44.5341V27.4C44.5341 23.59 41.608 20.5 38 20.5C34.392 20.5 31.4659 23.59 31.4659 27.4V28H26.6364C26.0078 28 25.5 28.5363 25.5 29.2V49.3C25.5 49.9638 26.0078 50.5 26.6364 50.5H49.3636C49.9922 50.5 50.5 49.9638 50.5 49.3V29.2C50.5 28.5363 49.9922 28 49.3636 28ZM34.0227 27.4C34.0227 25.0788 35.8018 23.2 38 23.2C40.1982 23.2 41.9773 25.0788 41.9773 27.4V28H34.0227V27.4Z"
            fill="#191919"
        />
    </svg>
);

const OtherIcon = () => (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="76" height="76" rx="8" fill="white" />
        <path
            d="M48 35.5758C48 44.0607 38 51.3334 38 51.3334C38 51.3334 28 44.0607 28 35.5758C28 32.6826 29.0536 29.9078 30.9289 27.8619C32.8043 25.8161 35.3478 24.6667 38 24.6667C40.6522 24.6667 43.1957 25.8161 45.0711 27.8619C46.9464 29.9078 48 32.6826 48 35.5758Z"
            fill="#191919"
            stroke="#191919"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M37.9998 37.9999C39.8408 37.9999 41.3332 36.5075 41.3332 34.6666C41.3332 32.8256 39.8408 31.3333 37.9998 31.3333C36.1589 31.3333 34.6665 32.8256 34.6665 34.6666C34.6665 36.5075 36.1589 37.9999 37.9998 37.9999Z"
            fill="white"
        />
    </svg>
);

const getDefaultIcon = (contentId: number): JSX.Element => {
    switch (contentId) {
        case specializeContentId[0]:
            return <TourIcon />;
        case specializeContentId[1]:
            return <ShoppingIcon />;
        case specializeContentId[2]:
            return <RestorantIcon />;
        default:
            return <OtherIcon />;
    }
};

const BannerSuggestionItem = (props: BannerSuggestionItemProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <CommonSheetBanner>
            <Box display="flex">
                <Box mr="0.75rem">
                    <ImgButton>
                        {props.src ? <ImgDisplay src={props.src} /> : getDefaultIcon(props.contentTypeId)}
                    </ImgButton>
                </Box>
                <Box flexGrow="1" display="flex" flexDirection="column" justifyContent="space-between">
                    <PlaceNameText>{props.placeName}</PlaceNameText>
                    <Box display="flex">
                        <PlaceInfoChipCustom label={t(contentIdMapper[props.contentTypeId].translateKey)} />
                        <Box my="auto" display="flex" ml="0.3125rem">
                            <BannerStarIcon />
                            <RatingText>{props.rating}</RatingText>
                        </Box>
                    </Box>
                    <DescriptionText>{props.description}</DescriptionText>
                </Box>
            </Box>
        </CommonSheetBanner>
    );
};

export default BannerSuggestionItem;
