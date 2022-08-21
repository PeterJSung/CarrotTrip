import { RootState } from 'redux/rootReducer';
const getToutlistArr = (state: RootState) => state.tourlistArea.data;
const getRecommandListArr = (state: RootState) => state.tourlistArea.data.recommand;
const getSuggestionListArr = (state: RootState) => state.tourlistArea.data.item;
const getMbtiInfoArr = (state: RootState) => state.tourlistArea.data.mbti;
const getTasteInfoArr = (state: RootState) => state.tourlistArea.data.taste;

export { getToutlistArr, getRecommandListArr, getSuggestionListArr, getMbtiInfoArr, getTasteInfoArr };
