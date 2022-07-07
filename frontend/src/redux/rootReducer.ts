import { combineReducers } from '@reduxjs/toolkit';

import Counter from './counter';
import Github from './github';
import Gps from './gps';
import SignupInfo from './signupInfo';
import UserInfo from './userInfo';

const reducers = combineReducers({
    counter: Counter,
    github: Github,
    gps: Gps,
    signupInfo: SignupInfo,
    userInfo: UserInfo,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
