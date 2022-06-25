export type SelectBoxVO = {
    src: string;
} & SelectChipVO;

export interface SelectChipVO {
    title: string;
    checked: boolean;
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
