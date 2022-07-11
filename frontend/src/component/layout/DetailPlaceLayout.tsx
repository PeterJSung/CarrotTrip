import { Box, Divider } from '@mui/material';
import PlaceAdressDetail from 'component/basic/Detail/PlaceAdressDetail';
import PlaceDescriptionDetail from 'component/basic/Detail/PlaceDescriptionDetail';
import DetailBubbleChartContainer from 'component/container/DetailBubbleChartContainer';
import DetailMBTIContainer from 'component/container/DetailMBTIContainer';
import { memo } from 'react';
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
    return (
        <Box>
            <Box height="11rem">
                <ImgTag src="https://picsum.photos/800" />
            </Box>
            <ItemContainer>
                <PlaceDescriptionDetail
                    placeType="type"
                    placeName="이것은 네임"
                    placeDesc="이것은 이름에이은 디테일한 설명입니다"
                />
                <Divider />
                <PlaceAdressDetail adressHeaderText="주소" adressText="경기도 어쩌고 저쩌고" />
                <Divider />
                <DetailBubbleChartContainer />
                <Divider />
                <DetailMBTIContainer />
                <Divider />
                <div>reviewCOntainer</div>
            </ItemContainer>
        </Box>
    );
};

export default memo(DetailPlaceLayout);
