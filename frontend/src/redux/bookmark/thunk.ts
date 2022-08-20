import { createBookMarkAPI, deleteBookMarkAPI, retrieveBookMarkAPI } from 'api/bookmark';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { getBookMarkAction, updateBookMarkAction } from './actions';
import { BookMarkInfoAction } from './reducer';

export const deleteBookMark = (name: string, apiId: number): ThunkAction<void, RootState, null, BookMarkInfoAction> => {
    return async (dispatch) => {
        const delRes = await deleteBookMarkAPI(name, apiId);
        await dispatch(
            updateBookMarkAction({
                type: 'DELETE',
                apiId,
                name,
            }),
        );
    };
};

export const createBookMark = (name: string, apiId: number): ThunkAction<void, RootState, null, BookMarkInfoAction> => {
    return async (dispatch) => {
        const createRes = await createBookMarkAPI(name, apiId);
        await dispatch(
            updateBookMarkAction({
                type: 'CREATE',
                apiId,
                name,
            }),
        );
    };
};

export const retrieveAllBookMark = (name: string): ThunkAction<void, RootState, null, BookMarkInfoAction> => {
    return async (dispatch) => {
        const allBookMarks = await retrieveBookMarkAPI(name);
        await dispatch(getBookMarkAction(allBookMarks));
    };
};
