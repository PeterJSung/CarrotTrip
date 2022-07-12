import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { PlaceBasicInformation, PlaceDetailInformation, WritedReviewInfo } from 'vo/placeInfo';
import * as actions from './actions';

export type PlaceInfoAction = ActionType<typeof actions>;

export type PlaceInfoState = SyncState<{
    basicInfo: PlaceBasicInformation;
    detailInfo: PlaceDetailInformation;
    writedReviewInfo: WritedReviewInfo;
}>;

const initialState: PlaceInfoState = {
    data: {
        basicInfo: { placename: '', placeType: '' },
        detailInfo: { adress: '', description: '', mbtiArr: [], moodArr: [], reviewArr: [] },
        writedReviewInfo: { rating: 0, reviewText: '' },
    },
};

export const generateReducer = (firstState: PlaceInfoState = initialState) => {
    return createReducer<PlaceInfoState, PlaceInfoAction>(firstState, {
        [actions.PlaceInfoActions.UPDATE_PLACEINFO]: (state, action) =>
            produce(state, (draft) => {
                draft.data.basicInfo = action.payload.basicInfo;
                draft.data.detailInfo = action.payload.detailInfo;
            }),
        [actions.PlaceInfoActions.UPDATE_REVIEWINFO]: (state, action) =>
            produce(state, (draft) => {
                draft.data.writedReviewInfo = action.payload.reviewInfo;
            }),
    });
};

export default generateReducer();
