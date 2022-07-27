import { Box, Divider } from '@mui/material';
import DetailBubbleChart from 'component/basic/Detail/DetailBubbleChart';
import DetailMBTI from 'component/basic/Detail/DetailMBTI';
import PlaceAdressDetail from 'component/basic/Detail/PlaceAdressDetail';
import PlaceDescriptionDetail from 'component/basic/Detail/PlaceDescriptionDetail';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { PlaceBookmarkInfo } from 'vo/placeInfo';
import { contentIdMapper } from 'vo/travelInfo';

export interface DetailPlaceProps {
    src: string;
    type: number;
    name: string;
    description: string;
    address: string;
    moodArr: string[];
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

const DetailPlace = (props: DetailPlaceProps): JSX.Element => {
    const { t } = useTranslation();
    console.log(`AAA ${props.moodArr}`);
    return (
        <Box>
            <Box height="11rem">
                <ImgTag src={props.src} />
            </Box>
            <ItemContainer>
                <PlaceDescriptionDetail
                    placeType={t(contentIdMapper[props.type].translateKey)}
                    placeName={props.name}
                    placeDesc={props.description}
                />
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
