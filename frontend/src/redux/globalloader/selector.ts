import { RootState } from 'redux/rootReducer';
const isLoadingSelector = (state: RootState) => state.globalloader.data.isLoading;

export { isLoadingSelector };
