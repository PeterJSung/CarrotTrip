import { RootState } from 'redux/rootReducer';
const getUserInfo = (state: RootState) => state.userInfo.data;
const getUserName = (state: RootState) => (typeof state.userInfo.data === 'string' ? '' : state.userInfo.data.name);
const getIsLogin = (state: RootState) =>
    typeof state.userInfo.data === 'string' ? false : state.userInfo.data.isLogin;
const getErrorMsg = (state: RootState) => (typeof state.userInfo.data === 'string' ? state.userInfo.data : undefined);

export { getUserInfo, getIsLogin, getErrorMsg, getUserName };
