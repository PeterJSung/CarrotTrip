import { Box, Divider } from '@mui/material';
import DetailBubbleChart from 'component/basic/Detail/DetailBubbleChart';
import DetailMBTI from 'component/basic/Detail/DetailMBTI';
import PlaceAdressDetail from 'component/basic/Detail/PlaceAdressDetail';
import PlaceDescriptionDetail from 'component/basic/Detail/PlaceDescriptionDetail';
import styled from 'styled-components';
import { PlaceBookmarkInfo } from 'vo/placeInfo';

export interface PlaceInfo {
    src: string;
    type: string;
    name: string;
    description: string;
    address: string;
    moodArr: number[];
    mbtiArr: PlaceBookmarkInfo[];
}

const ImgTag = styled.img`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ItemContainer = styled(Box)`
    & > :not(hr):first-child {
        padding: 1.25rem 1.25rem 2.5rem;
    }
    & > :not(hr):not(:first-child) {
        padding: 2.5rem 1.25rem 2.5rem;
    }
`;

const DetailPlace = (props: PlaceInfo): JSX.Element => {
    return (
        <Box>
            <Box height="11rem">
                <ImgTag src={props.src} />
            </Box>
            <ItemContainer>
                <PlaceDescriptionDetail placeType={props.type} placeName={props.name} placeDesc={props.description} />
                <Divider />
                <PlaceAdressDetail address={props.address} />
                <Divider />
                <DetailBubbleChart moodArr={props.moodArr} />
                <Divider />
                <DetailMBTI mbtiArr={props.mbtiArr} />
                <Divider />
                <div>reviewCOntainer</div>
            </ItemContainer>
        </Box>
    );
};

export default DetailPlace;
