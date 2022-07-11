import { TFunction } from 'react-i18next';
import { i18n_IMPRESSION_REF, i18n_PLACE_REF } from 'vo/travelInfo';

export type SelectBoxVO = {
    src: string;
} & SelectChipVO;

export interface SelectChipVO {
    title: string;
    checked: boolean;
    code: number;
}

export enum M_ONE_TYPE {
    E = 'E',
    I = 'I',
}
export const M_ONE_VALUES = Object.values(M_ONE_TYPE);

export enum M_TWO_TYPE {
    S = 'S',
    N = 'N',
}

export const M_TWO_VALUES = Object.values(M_TWO_TYPE);

export enum M_THR_TYPE {
    T = 'T',
    F = 'F',
}
export const M_THR_VALUES = Object.values(M_THR_TYPE);
export enum M_FOR_TYPE {
    J = 'J',
    P = 'P',
}
export const M_FOR_VALUES = Object.values(M_FOR_TYPE);

export const MBTI_LIST = [...M_ONE_VALUES, ...M_TWO_VALUES, ...M_THR_VALUES, ...M_FOR_VALUES] as const;

export type MBTI_TYPE = typeof MBTI_LIST[number];

export const MBTI_LEN: number = 4;

// it`ll be replace transition code

export const getImpressionAllData = (t: TFunction): SelectChipVO[] => {
    // TODO : it need to import i18n component
    const ret: SelectChipVO[] = [];
    // it`ll be start index 1
    for (const key in i18n_IMPRESSION_REF) {
        ret.push({
            checked: false,
            code: Number(key),
            title: i18n_IMPRESSION_REF[key].translateKey, //it`ll be converted from i18n
        });
    }
    return ret;
};

export const getPlaceInfo = (t: TFunction): SelectBoxVO[] => {
    // TODO : it need to import i18n component
    const ret: SelectBoxVO[] = [];
    // code need to setup
    i18n_PLACE_REF.forEach((eachData) => {
        ret.push({
            src: 'https://picsum.photos/800', // it`ll be replace
            checked: false,
            code: eachData.code,
            title: eachData.translateKey, //it`ll be converted from i18n
        });
    });
    return ret;
};

export const CHECKED_DIM_OP = 0.77;
export const UNCHECKED_DIM_OP = 0.2;
