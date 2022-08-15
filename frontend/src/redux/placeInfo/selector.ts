import { RootState } from 'redux/rootReducer';

const placeDetailInfoSelector = (state: RootState) => state.placeInfo.data.detailInfo;

export { placeDetailInfoSelector };
