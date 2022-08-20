import { RootState } from 'redux/rootReducer';
const getUserInfo = (state: RootState) => state.userInfo.data;
const getUserName = (state: RootState) => state.userInfo.data.name ?? '';
const getUserMbti = (state: RootState) => state.userInfo.data.mbti;
const getIsLogin = (state: RootState) => state.userInfo.data.isLogin;
const getIsErrorMSG = (state: RootState) => state.userInfo.data.errMsg;

export { getUserInfo, getIsLogin, getUserName, getUserMbti, getIsErrorMSG };
