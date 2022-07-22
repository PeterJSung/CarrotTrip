import { RootState } from 'redux/rootReducer';
const getToutlistArr = (state: RootState) => state.tourlistArea.data;

export { getToutlistArr };
