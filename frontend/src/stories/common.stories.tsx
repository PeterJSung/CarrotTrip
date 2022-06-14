import { Provider } from 'react-redux';
import { cloneDeep } from 'lodash';
import store from 'redux/rootStore';
const dummyStore = cloneDeep(store);

const getDummyState = (storyRet: JSX.Element): JSX.Element => <Provider store={dummyStore}>{storyRet}</Provider>;

export { getDummyState };
