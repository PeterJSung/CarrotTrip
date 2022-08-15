import { RootState } from 'redux/rootReducer';
const reviewInfoSelector = (state: RootState) => state.reviewInfo.data;

export { reviewInfoSelector };
