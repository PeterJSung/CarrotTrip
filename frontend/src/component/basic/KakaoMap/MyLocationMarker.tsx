import { DEFAULT_REM_PX } from 'common/constants';
import { MapMarker } from 'react-kakao-maps-sdk';
import { Gps } from 'vo/gps';

export type MyLocationMarkerProps = Omit<Gps, 'regionStr'>;

const MyLocationMarker = (props: MyLocationMarkerProps): JSX.Element => {
    return (
        <MapMarker
            image={{
                src: 'https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif',
                size: {
                    width: DEFAULT_REM_PX * 1.75,
                    height: DEFAULT_REM_PX * 1.75,
                },
            }}
            position={{ lat: props.lat, lng: props.lng }}
        />
    );
};

export default MyLocationMarker;
