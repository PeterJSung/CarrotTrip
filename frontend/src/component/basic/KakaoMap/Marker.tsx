import { Box } from '@mui/material';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import { specializeContentId } from 'vo/travelInfo';
import EctIcon from './MarkerIcons/EctIcon';
import RestorantIcon from './MarkerIcons/RestorantIcon';
import ShoppingIcon from './MarkerIcons/ShoppingIcon';
import TourIcon from './MarkerIcons/TourIcon';

export interface MarkerProps {
    isSelect: boolean;
    lat: number;
    lng: number;
    contentId: number;
    eventTypeId: number;
    src?: string;
    onClick: (id: number, typeId: number) => void;
}

const nonSrcIcon = (props: MarkerProps) => {
    let Component = EctIcon;
    switch (props.eventTypeId) {
        case specializeContentId[0]: //restorant
            Component = TourIcon;
            break;
        case specializeContentId[1]: //restorant
            Component = ShoppingIcon;
            break;
        case specializeContentId[2]: //restorant
            Component = RestorantIcon;
            break;
    }
    return <Component isSelected={props.isSelect} />;
};

const Marker = (props: MarkerProps): JSX.Element => {
    return (
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
            // 커스텀 오버레이가 표시될 위치입니다
            position={{
                lat: props.lat,
                lng: props.lng,
            }}
            xAnchor={0.8}
            yAnchor={0.8}
            clickable={true}
        >
            <Box onClick={() => props.onClick(props.contentId, props.eventTypeId)}>
                {
                    /*props.src ? <SrcIcon isSelected={props.isSelect} src={props.src} /> : nonSrcIcon(props) */
                    nonSrcIcon(props)
                }
            </Box>
        </CustomOverlayMap>
    );
};

export default Marker;
