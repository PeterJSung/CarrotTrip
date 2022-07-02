import { RootState } from 'redux/rootReducer';

const singupInfo1 = (state: RootState) => state.signupInfo.data.signupInfo1;
const singupInfo2 = (state: RootState) => state.signupInfo.data.signupInfo2;
const singupInfo3 = (state: RootState) => state.signupInfo.data.signupInfo3;
const singupInfo4 = (state: RootState) => state.signupInfo.data.signupInfo4;
const singupInfo5 = (state: RootState) => state.signupInfo.data.signupInfo5;

export { singupInfo1, singupInfo2, singupInfo3, singupInfo4, singupInfo5 };
