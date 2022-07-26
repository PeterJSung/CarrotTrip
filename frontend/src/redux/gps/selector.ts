import { RootState } from 'redux/rootReducer';
import { MyLocationGps } from 'vo/gps';

const currentGps = (state: RootState): MyLocationGps => state.gps.data.current;

export { currentGps };
