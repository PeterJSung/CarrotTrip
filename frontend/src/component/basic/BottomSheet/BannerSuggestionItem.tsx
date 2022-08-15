import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { contentIdMapper } from 'vo/travelInfo';
import NonSrcIcon from '../common/NonSrcIcon';
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

const DEFAULT_SIZE = 4.7;

const ImgButton = styled.div`
    width: ${DEFAULT_SIZE}rem !important;
    height: ${DEFAULT_SIZE}rem !important;
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

const BannerSuggestionItem = (props: BannerSuggestionItemProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <CommonSheetBanner>
            <Box display="flex">
                <Box mr="0.75rem">
                    <ImgButton>
                        {props.src ? <ImgDisplay src={props.src} /> : <NonSrcIcon contentId={props.contentTypeId} />}
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
