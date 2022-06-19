export type SelectBoxVO = {
    src: string;
} & SelectChipVO;

export interface SelectChipVO {
    title: string;
    checked: boolean;
}

export enum MBTITYPE {
    E = 'E',
    S = 'S',
    T = 'T',
    J = 'J',
    I = 'I',
    N = 'N',
    F = 'F',
    P = 'P',
}
