import { RootState } from 'redux/rootReducer';
const bookMarkSelector = (state: RootState) => state.bookMarkInfo.data.bookMarkInfo;

export { bookMarkSelector };
