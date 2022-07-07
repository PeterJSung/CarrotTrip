import { RootState } from 'redux/rootReducer';

const getUserInfo = (state: RootState) => state.userInfo.data.userInfo;

export { getUserInfo };
