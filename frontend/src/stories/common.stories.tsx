import { Store } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from 'redux/rootStore';
const genDummyStore = () => cloneDeep(store);

const getDummyState = (storyRet: JSX.Element): JSX.Element => <Provider store={genDummyStore()}>{storyRet}</Provider>;
const getDummyStateWithMock = (storyRet: JSX.Element, store: Store): JSX.Element => (
    <Provider store={store}>{storyRet}</Provider>
);

const dummyRouter = (storyRet: JSX.Element): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={storyRet} />
        </Routes>
    </BrowserRouter>
);

export { genDummyStore, getDummyState, getDummyStateWithMock, dummyRouter };
