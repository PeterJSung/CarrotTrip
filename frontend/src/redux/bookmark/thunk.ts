import { createBookMarkAPI, deleteBookMarkAPI, retrieveBookMarkAPI } from 'api/bookmark';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { getBookMarkAction, updateBookMarkAction } from './actions';
import { BookMarkInfoAction } from './reducer';

export const deleteBookMark = (name: string, apiId: number): ThunkAction<void, RootState, null, BookMarkInfoAction> => {
    return async (dispatch) => {
        const delRes = await deleteBookMarkAPI(name, apiId);
        console.log(`Book Mark Delete ${delRes}`);
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
        console.log(`Book Mark Create ${createRes}`);
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
        console.log(`Book Mark All Retrieve ${JSON.stringify(allBookMarks)}`);
        await dispatch(getBookMarkAction(allBookMarks));
    };
};
