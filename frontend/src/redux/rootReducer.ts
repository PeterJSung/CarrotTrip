import { combineReducers } from '@reduxjs/toolkit';

import Counter from './counter';
import Github from './github';
import Gps from './gps';

const reducers = combineReducers({
    counter: Counter,
    github: Github,
    gps: Gps,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
