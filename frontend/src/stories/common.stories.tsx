import { Store } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { Provider } from 'react-redux';
import store from 'redux/rootStore';
const genDummyStore = () => cloneDeep(store);

const getDummyState = (storyRet: JSX.Element): JSX.Element => <Provider store={genDummyStore()}>{storyRet}</Provider>;
const getDummyStateWithMock = (storyRet: JSX.Element, store: Store): JSX.Element => (
    <Provider store={store}>{storyRet}</Provider>
);

export { genDummyStore, getDummyState, getDummyStateWithMock };
