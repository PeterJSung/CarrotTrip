import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import PlaceInfoChip from '../common/PlaceInfoChip';
import BannerStarIcon from './BannerStarIcon';
import CommonSheetBanner from './CommonSheetBanner';

export interface BannerSuggestionItemProps {
    placeName: string;
    rating: number;
    src?: string;
    description: string;
}

const DEFAULT_ISZE = 5;

const ImgButton = styled.div`
    width: ${DEFAULT_ISZE}rem !important;
    height: ${DEFAULT_ISZE}rem !important;
    border-radius: 0.5rem !important;
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
    margin-bottom: 0;
`;

const BannerSuggestionItem = (props: BannerSuggestionItemProps): JSX.Element => {
    return (
        <CommonSheetBanner>
            <Box display="flex">
                <Box mr="0.75rem">
                    <ImgButton>
                        <ImgDisplay src={props.src} />
                    </ImgButton>
                </Box>
                <Box flexGrow="1" display="flex" flexDirection="column" justifyContent="space-between">
                    <PlaceNameText>{props.placeName}</PlaceNameText>
                    <Box display="flex">
                        <PlaceInfoChipCustom label="test" />
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
