import { RootState } from 'redux/rootReducer';
const bookMarkSelector = (state: RootState) => state.bookMarkInfo.data;

export { bookMarkSelector };
