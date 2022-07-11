import { RootState } from 'redux/rootReducer';

const getSingupInfo1 = (state: RootState) => state.signupInfo.data.signupInfo1;
const getSignupInfo2Banner = (state: RootState) => state.signupInfo.data.signupInfo2Banner;
const getSingupInfo2 = (state: RootState) => state.signupInfo.data.signupInfo2;
const getSingupInfo3 = (state: RootState) => state.signupInfo.data.signupInfo3;
const getSingupInfo4 = (state: RootState) => state.signupInfo.data.signupInfo4;
const getSingupInfo5 = (state: RootState) => state.signupInfo.data.signupInfo5;

export { getSingupInfo1, getSignupInfo2Banner, getSingupInfo2, getSingupInfo3, getSingupInfo4, getSingupInfo5 };
