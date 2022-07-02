import { TFunction } from 'react-i18next';

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
const i18n_REF = [
    '조용한',
    '차분한',
    '활기있는',
    '열정적인',
    '모험적인',
    '재미있는',
    '친근한',
    '온화한',
    '즉흥적인',
    '엉뚱한',
    '소심한',
    '내성적인',
    '복잡한',
    '계획적인',
    '자연친화적인',
];

export const getImpressionInfo = (t: TFunction): SelectChipVO[] => {
    // TODO : it need to import i18n component
    console.log(t('test'));
    console.log(t('test_with_variable', { name: '성정민' }));
    const ret: SelectChipVO[] = [];
    // it`ll be start index 1
    i18n_REF.forEach((eachData, index) => {
        ret.push({
            checked: false,
            code: index + 1,
            title: eachData, //it`ll be converted from i18n
        });
    });
    console.log(ret);
    return ret;
};
