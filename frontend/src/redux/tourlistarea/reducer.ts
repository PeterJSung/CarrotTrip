import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { contentIdMapper, TourlistDataset, TourlistInfo } from 'vo/travelInfo';
import * as actions from './actions';

export type TourlistAreaAction = ActionType<typeof actions>;

export type TourlistAreaState = SyncState<{
    recommand: TourlistDataset[];
    item: { [key: string]: TourlistDataset[] };
}>;

const initialState: TourlistAreaState = {
    data: {
        recommand: [],
        item: {},
    },
};

const convertContentTypeId = (typeId: number): number => contentIdMapper[typeId].targetCode;

const convertDatasetFromAPI = (d: TourlistInfo): TourlistDataset => ({
    addr: d.addr1,
    aveScore: d.aveScore,
    contentId: d.contentid,
    contentTypeId: convertContentTypeId(d.contenttypeid),
    lat: d.mapy,
    lng: d.mapx,
    mbti: d.mbti,
    mbtiAveScore: d.mbtiAveScore,
    recommendScore: d.recommendScore,
    tasteList: d.tasteList,
    title: d.title,
    userTaste: d.userTaste,
    src: d.firstimage ?? d.firstimage2,
});

export const generateReducer = (firstState: TourlistAreaState = initialState) => {
    return createReducer<TourlistAreaState, TourlistAreaAction>(firstState, {
        [actions.TourlistAreaActions.UPDATE_AREA]: (state, action) =>
            produce(state, (draft) => {
                draft.data.recommand = action.payload.recommand.map(convertDatasetFromAPI);
                draft.data.item = {};
                action.payload.total.forEach((d) => {
                    const convId = convertContentTypeId(d.contenttypeid);
                    if (!draft.data.item[convId]) {
                        draft.data.item[convId] = [];
                    }
                    draft.data.item[convId].push(convertDatasetFromAPI(d));
                });
            }),
    });
};

export default generateReducer();
