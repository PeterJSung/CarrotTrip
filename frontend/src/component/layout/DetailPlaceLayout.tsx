import { Box, Divider } from '@mui/material';
import DetailBubbleChart from 'component/basic/Detail/DetailBubbleChart';
import DetailMBTI from 'component/basic/Detail/DetailMBTI';
import PlaceAdressDetail from 'component/basic/Detail/PlaceAdressDetail';
import PlaceDescriptionDetail from 'component/basic/Detail/PlaceDescriptionDetail';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getPlaceBasicInfo, getPlaceDetailInfo } from 'redux/placeInfo';
import styled from 'styled-components';

const ItemContainer = styled(Box)`
    & > :not(hr):first-child {
        padding: 1.25rem 1.25rem 2.5rem;
    }
    & > :not(hr):not(:first-child) {
        padding: 2.5rem 1.25rem 2.5rem;
    }
`;

const ImgTag = styled.img`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const DetailPlaceLayout = (): JSX.Element => {
    const placeBasicInfo = useSelector(getPlaceBasicInfo);
    const placeDetailInfo = useSelector(getPlaceDetailInfo);

    return (
        <Box>
            <Box height="11rem">
                <ImgTag src="https://picsum.photos/800" />
            </Box>
            <ItemContainer>
                <PlaceDescriptionDetail
                    placeType={placeBasicInfo.placeType}
                    placeName={placeBasicInfo.placename}
                    placeDesc={placeDetailInfo.description}
                />
                <Divider />
                <PlaceAdressDetail adressText={placeDetailInfo.adress} />
                <Divider />
                <DetailBubbleChart moodArr={placeDetailInfo.moodArr} />
                <Divider />
                <DetailMBTI mbtiArr={placeDetailInfo.mbtiArr} />
                <Divider />
                <div>reviewCOntainer</div>
            </ItemContainer>
        </Box>
    );
};

export default memo(DetailPlaceLayout);
