import { produce } from 'immer';
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
}>;

const initialState: TourlistAreaState = {
    data: {
        recommand: { sections: [], totalDistance: 0, name: '', avgRating: 0 },
        item: {},
        mbti: [],
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

                draft.data.mbti = [];
                draft.data.item = {};
                action.payload.total.forEach((d) => {
                    const convId = convertContentTypeId(d.contenttypeid);

                    if (!draft.data.item[convId]) {
                        draft.data.item[convId] = [];
                    }
                    const convertedData = convertDatasetFromAPI(d);
                    if (convertedData.mbti === action.payload.mbti) {
                        draft.data.mbti.push(convertedData);
                    }
                    draft.data.item[convId].push(convertedData);
                    mapper[convertedData.contentId] = convertedData;
                });
                let prevData: undefined | TourlistDataset;

                const routeResult = action.payload.navigationResult.routes[0];
                const naviPoints = action.payload.naviPoints;
                let avgRating: number = 0;
                draft.data.recommand.totalDistance = routeResult.summary.distance;
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
                        startInfo: {
                            id: prevData ? prevData.contentId : -1,
                            src: prevData ? prevData.src ?? 'assets/defaultplaceicon.png' : 'assets/startwalker.png',
                            title: prevData ? prevData.title : action.payload.myLocationInfo.regionStr,
                        },
                        endInfo: {
                            id: targetInfo.contentId,
                            src: targetInfo.src ? targetInfo.src : 'assets/defaultplaceicon.png',
                            title: targetInfo.title,
                        },
                    });
                    prevData = targetInfo;
                });
                avgRating /= routeResult.sections.length;
                draft.data.recommand.avgRating = parseFloat(avgRating.toFixed(2));
                draft.data.recommand.name = action.payload.name;
            }),
    });
};

export default generateReducer();
