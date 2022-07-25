import { RootState } from 'redux/rootReducer';
const getToutlistArr = (state: RootState) => state.tourlistArea.data;
const getRecommandListArr = (state: RootState) => state.tourlistArea.data.recommand;
const getSuggestionListArr = (state: RootState) => state.tourlistArea.data.item;

export { getToutlistArr, getRecommandListArr, getSuggestionListArr };
