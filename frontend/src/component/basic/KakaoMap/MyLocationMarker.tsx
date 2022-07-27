import { Box } from '@mui/material';
import { DEFAULT_REM_PX } from 'common/constants';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { PosInfo } from 'vo/gps';

const AnimateDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(5, 124, 255, 0.6);
    border-radius: 50%;
    opacity: 0;
    animation: pulsate 1500ms ease-out infinite;
    @keyframes pulsate {
        0% {
            transform: scale(0.1);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(1.3);
            opacity: 0;
        }
    }
`;

const MyLocationMarker = (props: PosInfo): JSX.Element => {
    return (
        <CustomOverlayMap clickable={false} position={{ lat: props.lat, lng: props.lng }}>
            <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={DEFAULT_REM_PX * 2}
                height={DEFAULT_REM_PX * 2}
            >
                <img
                    style={{
                        zIndex: 5,
                        maxWidth: '75%',
                        maxHeight: '75%',
                    }}
                    src={`assets/maps/currenticonblue.png`}
                />
                <AnimateDiv />
            </Box>
        </CustomOverlayMap>
    );
};

export default MyLocationMarker;
