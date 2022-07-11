import { RootState } from 'redux/rootReducer';

const getUserInfo = (state: RootState) => state.userInfo.data;
const getIsLogin = (state: RootState) => state.userInfo.data.isLogin;

export { getUserInfo, getIsLogin };
