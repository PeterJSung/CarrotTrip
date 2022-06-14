import { RootState } from 'redux/rootReducer';
import { DEFAULT_GPS, Gps } from 'vo/gps';

const gpsSelector = (state: RootState): Gps => state.gps.data ?? DEFAULT_GPS;

export { gpsSelector };
