import { combineReducers } from 'redux';

import Counter from './counter';
import Github from './github';

const reducers = combineReducers({
    counter: Counter,
    github: Github,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
