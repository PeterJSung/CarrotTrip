import { RootState } from 'redux/rootReducer';

const getPlaceBasicInfo = (state: RootState) => state.placeInfo.data.basicInfo;
const getPlaceDetailInfo = (state: RootState) => state.placeInfo.data.detailInfo;
const getWritedReviewInfo = (state: RootState) => state.placeInfo.data.writedReviewInfo;

export { getPlaceBasicInfo, getPlaceDetailInfo, getWritedReviewInfo };
