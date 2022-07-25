import { calculateLatLngDistance } from 'common/util';
import { produce } from 'immer';
import { SyncState } from 'redux/common';
import { ActionType, createReducer } from 'typesafe-actions';
import { MyLocationGps } from 'vo/gps';
import { contentIdMapper, TourlistDataset, TourlistInfo, TourlistRecoomandDataset } from 'vo/travelInfo';
import * as actions from './actions';

export type TourlistAreaAction = ActionType<typeof actions>;

export type TourlistAreaState = SyncState<{
    recommand: TourlistRecoomandDataset[];
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

const orderingDistanceCurrentPos = (
    locationInfo: MyLocationGps,
    data: TourlistDataset[],
): TourlistRecoomandDataset[] => {
    const totalCount = data.length;
    const checker: Array<boolean> = Array.from(Array(totalCount).fill(false));
    const orderedInfo: (TourlistDataset & { dist: number })[] = [];
    let currentLat = locationInfo.lat;
    let currentLng = locationInfo.lng;
    for (let i = 0; i < totalCount; i++) {
        let idx = -1;
        let minDistance = 10000000;
        for (let y = 0; y < totalCount; y++) {
            const currentDistance = calculateLatLngDistance(currentLat, currentLng, data[y].lat, data[y].lng);
            if (!checker[y] && minDistance > currentDistance) {
                minDistance = currentDistance;
                idx = y;
            }
        }
        if (idx !== -1) {
            checker[idx] = true;
            currentLat = data[idx].lat;
            currentLng = data[idx].lng;
            orderedInfo.push({ ...data[idx], dist: minDistance });
        }
    }
    console.log(orderedInfo);
    const ret: TourlistRecoomandDataset[] = [];
    orderedInfo.forEach((eachD, idx) => {
        ret.push({
            distanceInfo: eachD.dist,
            startInfo: {
                id: idx === 0 ? -1 : orderedInfo[idx - 1].contentId,
                src: idx === 0 ? 'assets/startwalker.png' : orderedInfo[idx - 1].src ?? 'assets/defaultplaceicon.png',
                title: idx === 0 ? locationInfo.regionStr : orderedInfo[idx - 1].title,
            },
            endInfo: {
                id: orderedInfo[idx].contentId,
                src: orderedInfo[idx].src ?? 'assets/defaultplaceicon.png',
                title: orderedInfo[idx].title,
            },
        });
    });
    console.log(JSON.stringify(ret));
    return ret;
};

export const generateReducer = (firstState: TourlistAreaState = initialState) => {
    return createReducer<TourlistAreaState, TourlistAreaAction>(firstState, {
        [actions.TourlistAreaActions.UPDATE_AREA]: (state, action) =>
            produce(state, (draft) => {
                const data = action.payload.recommand.map(convertDatasetFromAPI);
                console.log(data);
                draft.data.recommand = orderingDistanceCurrentPos(action.payload.myLocationInfo, data);
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
