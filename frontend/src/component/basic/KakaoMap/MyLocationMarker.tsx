import { DEFAULT_REM_PX } from 'common/constants';
import { MapMarker } from 'react-kakao-maps-sdk';
import { Gps } from 'vo/gps';

export type MyLocationMarkerProps = Omit<Gps, 'regionStr'>;

const MyLocationMarker = (props: MyLocationMarkerProps): JSX.Element => {
    return (
        <MapMarker
            image={{
                src: 'assets/maps/currenticonred.png',
                size: {
                    width: DEFAULT_REM_PX * 1.4,
                    height: DEFAULT_REM_PX * 1.4,
                },
            }}
            clickable={false}
            position={{ lat: props.lat, lng: props.lng }}
        />
    );
};

export default MyLocationMarker;
