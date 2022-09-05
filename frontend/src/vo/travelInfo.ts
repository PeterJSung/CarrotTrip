import { PosInfo } from './gps';

export interface TourListRetrieveRes {
    response: {
        body: {
            items: {
                item: TourlistInfo[];
                recommendCourseItem: TourlistInfo[];
            };
            numOfRows: number;
            pageNo: number;
            totalCount: number;
        };
        header: { resultCode: string; resultMsg: string };
    };
}

export interface TourlistRecoomandPathset {
    totalDistance: number;
    vertexList: PosInfo[];
}

interface EachRegionInfo {
    src: string;
    id: number;
    title: string;
}

export interface TourlistRecommandTotalSet {
    totalDistance: number;
    name: string;
    avgRating: number;
    sections: TourlistRecommandCourseSet[];
}

export interface TourlistRecommandCourseSet {
    distanceInfo: number;
    data: TourlistDataset;
    vertexList: PosInfo[];
}

export interface TourlistDataset {
    addr: string;
    contentId: number;
    eventTypeId: number;
    contentTypeId: number;
    lat: number;
    lng: number;
    src?: string;
    title: string;
    recommendScore: number;
    mbti: string;
    mbtiAveScore: number;
    aveScore: number;
    tasteList: string[];
    userTaste: boolean;
}

export interface TourlistInfo {
    addr1: string;
    areacode: number;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: number;
    contenttypeid: number;
    createdtime: number;
    firstimage?: string;
    firstimage2?: string;
    dist: number;
    mapx: number;
    mapy: number;
    mlevel: number;
    modifiedtime: number;
    readcount: number;
    sigungucode: number;
    title: string;
    recommendScore: number;
    mbti: string;
    mbtiAveScore: number;
    aveScore: number;
    tasteList: string[];
    userTaste: boolean;
}

interface ContentIdDataSet {
    [key: number]: string;
}

export const ContentIDStandardInfo: ContentIdDataSet = {
    12: '관광지',
    14: '문화시설',
    15: '행사/공연/축제',
    25: '여행코스', // 한국인 전용
    28: '레포츠',
    32: '숙박',
    38: '쇼핑',
    39: '음식점',
    76: '관광지',
    78: '문화시설',
    85: '행사/공연/축제',
    75: '레포츠',
    77: '교통', // 외국인 전용
    80: '숙박',
    79: '쇼핑',
    82: '음식점',
};

export interface AttractionDataSet {
    translateKey: string;
    color: string;
}

export interface AttractionInfo {
    [code: number]: AttractionDataSet;
}

interface PlaceRefInfo {
    dataset: IdMapperSet;
    src: string;
}

export type Suggestion_Event_Type = 'COURSE' | 'MBTI' | 'TENDENCY' | 'ETC' | 'FILTER'; // filter 일때만 관광지 음식점 이런 기준정보로 보여줌

interface SuggestionTabInfo {
    type: Suggestion_Event_Type;
    dataset: IdMapperSet;
}

// display data 와 event 둘다있어야함.

export enum CONTENT_ID_TRANSLATION {
    TOUR_AREA = 'travelinfo.place.tour', // 관광지
    CULTURE = 'travelinfo.place.culture', // 문화시설
    FESTIVAL = 'travelinfo.place.festival', // 행사/공연/축제
    TRAVEL_COURSE = 'travelinfo.place.travel', // 여행코스 (국문 only)
    REPORTS = 'travelinfo.place.reports', // 레포츠
    TRAFFIC = 'travelinfo.place.traffic', // 교통 (해외 only)
    AMENITY = 'travelinfo.place.amenity', // 숙박
    SHOOPING = 'travelinfo.place.shopping', // 쇼핑
    RESTAURANT = 'travelinfo.place.restaurant', // 음식점
    // below Key is customization
    RECOMMAND = 'travelinfo.suggestion.recommend', // 관광지
    MBTI = 'travelinfo.suggestion.mbti',
    TENDENCY = 'travelinfo.suggestion.tendency',
    ETC = 'travelinfo.suggestion.etc',
}

interface IdMapperSet {
    targetCode: number;
    translateKey: CONTENT_ID_TRANSLATION;
}

interface ContentIdMapper {
    [key: number]: IdMapperSet;
}

export const getTargetCodeFromTourlist = (typeId: number) => {
    return specializeContentId.includes(typeId) ? typeId : 300; /** 300 is ETC */
};

// 12 = tour area 38 = shopping 39 = restorant
export const specializeContentId = [12, 38, 39];

export const contentIdMapper: ContentIdMapper = {
    // 국문 contendId refer link is https://api.visitkorea.or.kr/openAPI/tourAPI/koreaGuide.do
    12: { targetCode: 12, translateKey: CONTENT_ID_TRANSLATION.TOUR_AREA },
    14: { targetCode: 14, translateKey: CONTENT_ID_TRANSLATION.CULTURE },
    15: { targetCode: 15, translateKey: CONTENT_ID_TRANSLATION.FESTIVAL },
    25: { targetCode: 25, translateKey: CONTENT_ID_TRANSLATION.TRAVEL_COURSE },
    28: { targetCode: 28, translateKey: CONTENT_ID_TRANSLATION.REPORTS },
    32: { targetCode: 32, translateKey: CONTENT_ID_TRANSLATION.AMENITY },
    38: { targetCode: 38, translateKey: CONTENT_ID_TRANSLATION.SHOOPING },
    39: { targetCode: 39, translateKey: CONTENT_ID_TRANSLATION.RESTAURANT },
    // 다국어 contendId refer link is https://api.visitkorea.or.kr/openAPI/tourAPI/languageGuide.do
    76: { targetCode: 12, translateKey: CONTENT_ID_TRANSLATION.TOUR_AREA },
    78: { targetCode: 14, translateKey: CONTENT_ID_TRANSLATION.CULTURE },
    85: { targetCode: 15, translateKey: CONTENT_ID_TRANSLATION.FESTIVAL },
    40: { targetCode: 25, translateKey: CONTENT_ID_TRANSLATION.TRAVEL_COURSE },
    75: { targetCode: 28, translateKey: CONTENT_ID_TRANSLATION.REPORTS },
    77: { targetCode: 77, translateKey: CONTENT_ID_TRANSLATION.TRAFFIC },
    80: { targetCode: 32, translateKey: CONTENT_ID_TRANSLATION.AMENITY },
    79: { targetCode: 38, translateKey: CONTENT_ID_TRANSLATION.SHOOPING },
    82: { targetCode: 39, translateKey: CONTENT_ID_TRANSLATION.RESTAURANT },
};

export const i18n_SUGGESTION_REF: SuggestionTabInfo[] = [
    { type: 'COURSE', dataset: { targetCode: 100, translateKey: CONTENT_ID_TRANSLATION.RECOMMAND } },
    { type: 'FILTER', dataset: contentIdMapper[12] },
    { type: 'FILTER', dataset: contentIdMapper[39] },
    { type: 'FILTER', dataset: contentIdMapper[38] },
    { type: 'MBTI', dataset: { targetCode: 200, translateKey: CONTENT_ID_TRANSLATION.MBTI } },
    { type: 'TENDENCY', dataset: { targetCode: 400, translateKey: CONTENT_ID_TRANSLATION.TENDENCY } },
    { type: 'ETC', dataset: { targetCode: 300, translateKey: CONTENT_ID_TRANSLATION.ETC } },
];

const COMMON_PREFIX_PLACE_SRC = `assets/placephoto`;

export const i18n_PLACE_REF: PlaceRefInfo[] = [
    { dataset: contentIdMapper[12], src: `${COMMON_PREFIX_PLACE_SRC}/tourplace.png` },
    { dataset: contentIdMapper[14], src: `${COMMON_PREFIX_PLACE_SRC}/culture.png` },
    { dataset: contentIdMapper[15], src: `${COMMON_PREFIX_PLACE_SRC}/festival.png` },
    { dataset: contentIdMapper[25], src: `${COMMON_PREFIX_PLACE_SRC}/travel.png` },
    { dataset: contentIdMapper[28], src: `${COMMON_PREFIX_PLACE_SRC}/reports.png` },
    { dataset: contentIdMapper[32], src: `${COMMON_PREFIX_PLACE_SRC}/sukbak.png` },
    { dataset: contentIdMapper[38], src: `${COMMON_PREFIX_PLACE_SRC}/shop.png` },
    { dataset: contentIdMapper[39], src: `${COMMON_PREFIX_PLACE_SRC}/resto.png` },
];

export const i18n_IMPRESSION_REF: AttractionInfo = {
    1: { translateKey: 'travelinfo.impression.1', color: '#2E59A1' },
    2: { translateKey: 'travelinfo.impression.2', color: '#16006D' },
    3: { translateKey: 'travelinfo.impression.3', color: '#EB9775' },
    4: { translateKey: 'travelinfo.impression.4', color: '#EC6A5D' },
    5: { translateKey: 'travelinfo.impression.5', color: '#55ACD2' },
    6: { translateKey: 'travelinfo.impression.6', color: '#E58FC5' },
    7: { translateKey: 'travelinfo.impression.7', color: '#FF80A' },
    8: { translateKey: 'travelinfo.impression.8', color: '#48A089' },
    9: { translateKey: 'travelinfo.impression.9', color: '#FF7120' },
    10: { translateKey: 'travelinfo.impression.10', color: '#9B7DD7' },
    11: { translateKey: 'travelinfo.impression.11', color: '#989C9C' },
    12: { translateKey: 'travelinfo.impression.12', color: '#9EC3CB' },
    13: { translateKey: 'travelinfo.impression.13', color: '#C476F4' },
    14: { translateKey: 'travelinfo.impression.14', color: '#474747' },
    15: { translateKey: 'travelinfo.impression.15', color: '#8AD25E' },
};
