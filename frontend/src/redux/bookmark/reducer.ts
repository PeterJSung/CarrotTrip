import { produce } from 'immer';
import { cloneDeep } from 'lodash';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

export type BookMarkInfoAction = ActionType<typeof actions>;

type BookMarkDataSet = { [key: number]: number };

export type BookMarkInfoState = SyncState<{
    bookMarkInfo: BookMarkDataSet;
}>;
const initialState: BookMarkInfoState = {
    data: {
        bookMarkInfo: {},
    },
};

export const generateReducer = (firstState: BookMarkInfoState = initialState) => {
    return createReducer<BookMarkInfoState, BookMarkInfoAction>(firstState, {
        [actions.BookMarkInfoActions.GET_BOOKMARK]: (state, action) =>
            produce(state, (draft) => {
                draft.data.bookMarkInfo = {};
                action.payload.forEach((d) => {
                    draft.data.bookMarkInfo[d.apiId] = d.apiId;
                });
            }),
        [actions.BookMarkInfoActions.UPDATE_BOOKMARK]: (state, action) =>
            produce(state, (draft) => {
                let newData: BookMarkDataSet = cloneDeep(draft.data.bookMarkInfo);
                if (action.payload.type === 'CREATE') {
                    newData[action.payload.apiId] = action.payload.apiId;
                } else {
                    delete newData[action.payload.apiId];
                }
                draft.data.bookMarkInfo = newData;
            }),
    });
};

export default generateReducer();
