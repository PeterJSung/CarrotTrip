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

export interface TourlistDataset {
    addr: string;
    cat: string;
    contentid: number;
    lat: number;
    lng: number;
    src?: string;
    title: string;
    recommendScore: number;
    mbti: string;
    mbtiAveScore: number;
    aveScore: number;
    tasteList: number[];
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
    tasteList: number[];
    userTaste: boolean;
}

export interface AttractionDataSet {
    translateKey: string;
    color: string;
}

export interface AttractionInfo {
    [code: number]: AttractionDataSet;
}

interface PlaceRefInfo {
    translateKey: string;
    code: number;
    src: string;
}

interface SuggestionTabInfo {
    code: number;
    translateKey: string;
}

export const i18n_SUGGESTION_REF: SuggestionTabInfo[] = [
    { code: 1, translateKey: 'travelinfo.suggestion.recommend' },
    { code: 2, translateKey: 'travelinfo.suggestion.tour' },
    { code: 3, translateKey: 'travelinfo.suggestion.restaurant' },
    { code: 4, translateKey: 'travelinfo.suggestion.shopping' },
    { code: 5, translateKey: 'travelinfo.suggestion.mbti' },
    { code: 6, translateKey: 'travelinfo.suggestion.etc' },
];

const COMMON_PREFIX_PLACE_SRC = `assets/placephoto`;

export const i18n_PLACE_REF: PlaceRefInfo[] = [
    { code: 1, translateKey: 'travelinfo.place.tour', src: `${COMMON_PREFIX_PLACE_SRC}/tourplace.png` },
    { code: 2, translateKey: 'travelinfo.place.culture', src: `${COMMON_PREFIX_PLACE_SRC}/culture.png` },
    { code: 3, translateKey: 'travelinfo.place.festival', src: `${COMMON_PREFIX_PLACE_SRC}/festival.png` },
    { code: 4, translateKey: 'travelinfo.place.travel', src: `${COMMON_PREFIX_PLACE_SRC}/travel.png` },
    { code: 5, translateKey: 'travelinfo.place.reports', src: `${COMMON_PREFIX_PLACE_SRC}/reports.png` },
    { code: 6, translateKey: 'travelinfo.place.sukbak', src: `${COMMON_PREFIX_PLACE_SRC}/sukbak.png` },
    { code: 7, translateKey: 'travelinfo.place.shopping', src: `${COMMON_PREFIX_PLACE_SRC}/shop.png` },
    { code: 8, translateKey: 'travelinfo.place.restaurant', src: `${COMMON_PREFIX_PLACE_SRC}/resto.png` },
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
