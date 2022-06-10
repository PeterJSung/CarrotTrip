import { RootState } from 'redux/rootReducer';
import { Gps } from 'vo/gps';

const gpsSelector = (state: RootState): Gps | null => state.gps.data;

export { gpsSelector };
