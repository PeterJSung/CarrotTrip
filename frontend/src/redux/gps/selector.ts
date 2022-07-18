import { RootState } from 'redux/rootReducer';
import { LocationInfo, MyLocationGps } from 'vo/gps';

const currentGps = (state: RootState): MyLocationGps => state.gps.data.current;
const temporaryGps = (state: RootState): LocationInfo => state.gps.data.temporaryMove;

export { currentGps, temporaryGps };
