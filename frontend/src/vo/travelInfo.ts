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

const COMMON_PREFIX_PLACE_SRC = `assets/placephoto`;

export const i18n_PLACE_REF: PlaceRefInfo[] = [
    { code: 1, translateKey: '관광지', src: `${COMMON_PREFIX_PLACE_SRC}/tourplace.png` },
    { code: 2, translateKey: '문화시설', src: `${COMMON_PREFIX_PLACE_SRC}/culture.png` },
    { code: 3, translateKey: '축제공연', src: `${COMMON_PREFIX_PLACE_SRC}/festival.png` },
    { code: 4, translateKey: '여행코스', src: `${COMMON_PREFIX_PLACE_SRC}/travel.png` },
    { code: 5, translateKey: '레포츠', src: `${COMMON_PREFIX_PLACE_SRC}/reports.png` },
    { code: 6, translateKey: '숙박', src: `${COMMON_PREFIX_PLACE_SRC}/sukbak.png` },
    { code: 7, translateKey: '쇼핑', src: `${COMMON_PREFIX_PLACE_SRC}/shop.png` },
    { code: 8, translateKey: '음식점', src: `${COMMON_PREFIX_PLACE_SRC}/resto.png` },
];

export const i18n_IMPRESSION_REF: AttractionInfo = {
    1: { translateKey: '조용한', color: '#2E59A1' },
    2: { translateKey: '차분한', color: '#16006D' },
    3: { translateKey: '활기있는', color: '#EB9775' },
    4: { translateKey: '열정적인', color: '#EC6A5D' },
    5: { translateKey: '모험적인', color: '#55ACD2' },
    6: { translateKey: '재미있는', color: '#E58FC5' },
    7: { translateKey: '친근한', color: '#FF80A' },
    8: { translateKey: '온화한', color: '#48A089' },
    9: { translateKey: '즉흥적인', color: '#FF7120' },
    10: { translateKey: '엉뚱한', color: '#9B7DD7' },
    11: { translateKey: '소심한', color: '#989C9C' },
    12: { translateKey: '내성적인', color: '#9EC3CB' },
    13: { translateKey: '복잡한', color: '#C476F4' },
    14: { translateKey: '계획적인', color: '#474747' },
    15: { translateKey: '자연친화적인', color: '#8AD25E' },
};
