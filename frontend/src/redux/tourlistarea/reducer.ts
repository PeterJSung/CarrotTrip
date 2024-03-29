import { produce } from 'immer';
import { cloneDeep } from 'lodash';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { PosInfo } from 'vo/gps';
import {
    contentIdMapper,
    specializeContentId,
    TourlistDataset,
    TourlistInfo,
    TourlistRecommandTotalSet,
} from 'vo/travelInfo';
import * as actions from './actions';

export type TourlistAreaAction = ActionType<typeof actions>;

export type TourlistAreaState = SyncState<{
    recommand: TourlistRecommandTotalSet;
    item: { [key: string]: TourlistDataset[] };
    mbti: TourlistDataset[];
    taste: TourlistDataset[];
    loadTime: number;
}>;

const initialState: TourlistAreaState = {
    data: {
        loadTime: 0,
        recommand: { sections: [], totalDistance: 0, name: '', avgRating: 0 },
        item: {},
        mbti: [],
        taste: [],
    },
};

const convertContentTypeId = (typeId: number): number => {
    const ret = contentIdMapper[typeId].targetCode;
    if (specializeContentId.includes(ret)) {
        return ret;
    } else {
        return 300;
    }
};

const convertDatasetFromAPI = (d: TourlistInfo): TourlistDataset => ({
    addr: d.addr1,
    aveScore: d.aveScore,
    contentId: d.contentid,
    eventTypeId: convertContentTypeId(d.contenttypeid),
    contentTypeId: d.contenttypeid,
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
                const mapper: { [key: number]: TourlistDataset } = {};
                draft.data.loadTime = action.payload.loadTime;
                draft.data.item = {};
                action.payload.total.forEach((d) => {
                    const convId = convertContentTypeId(d.contenttypeid);

                    if (!draft.data.item[convId]) {
                        draft.data.item[convId] = [];
                    }
                    const convertedData = convertDatasetFromAPI(d);

                    draft.data.item[convId].push(convertedData);
                    mapper[convertedData.contentId] = convertedData;
                });

                for (const key in draft.data.item) {
                    draft.data.item[key] = draft.data.item[key].sort((a, b) => {
                        return b.aveScore - a.aveScore;
                    });
                }

                let prevData: undefined | TourlistDataset;

                const routeResult = action.payload.navigationResult.routes[0];
                const naviPoints = action.payload.naviPoints;
                let avgRating: number = 0;
                draft.data.recommand = {
                    avgRating: 0,
                    name: '',
                    sections: [],
                    totalDistance: 0,
                };
                draft.data.recommand.totalDistance = routeResult.summary.distance;
                console.log(routeResult);
                routeResult.sections.forEach((eachSection, sectionIdx) => {
                    const vertexes: PosInfo[] = [];
                    eachSection.roads.forEach((eachRoads) => {
                        for (let i = 0; i < eachRoads.vertexes.length; i += 2) {
                            vertexes.push({
                                lng: eachRoads.vertexes[i],
                                lat: eachRoads.vertexes[i + 1],
                            });
                        }
                    });
                    const currentId = Number(naviPoints[sectionIdx].name);

                    const targetInfo = mapper[currentId];
                    avgRating += targetInfo.aveScore;
                    draft.data.recommand.sections.push({
                        distanceInfo: eachSection.distance,
                        vertexList: vertexes,
                        data: cloneDeep(targetInfo),
                    });
                    prevData = targetInfo;
                });

                avgRating /= routeResult.sections.length;
                draft.data.recommand.avgRating = parseFloat(avgRating.toFixed(2));
                draft.data.recommand.name = action.payload.name;
            }),
        [actions.TourlistAreaActions.UPDATE_MBTIDATA]: (state, action) =>
            produce(state, (draft) => {
                const unorderData: TourlistDataset[] = [];
                for (const key in state.data.item) {
                    const eachData = state.data.item[key];
                    eachData.forEach((info) => {
                        if (info.mbti.toLowerCase() === action.payload.mbti.toLocaleLowerCase()) {
                            unorderData.push(info);
                        }
                    });
                }
                draft.data.mbti = unorderData.sort((a, b) => b.aveScore - a.aveScore);
            }),
        [actions.TourlistAreaActions.UPDATE_TASTEDATA]: (state, action) =>
            produce(state, (draft) => {
                const unorderData: TourlistDataset[] = [];
                for (const key in state.data.item) {
                    const eachData = state.data.item[key];
                    eachData.forEach((info) => {
                        let isDuplication = false;
                        for (let i = 0; i < info.tasteList.length && !isDuplication; i++) {
                            const currentData = info.tasteList[i];
                            if (action.payload.tasteList.includes(Number(currentData))) {
                                isDuplication = true;
                            }
                        }
                        if (isDuplication) {
                            unorderData.push(info);
                        }
                    });
                }
                draft.data.taste = unorderData.sort((a, b) => b.aveScore - a.aveScore);
            }),
    });
};

export default generateReducer();
