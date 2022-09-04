// 2 depth 시

import { LocationInfo } from './gps';

// Recommand 시
// 현재 코스타입

// Suggestion 시
// 무슨 Suggestion 인가?
// 어디 위치 클릭했는가? id 와 lat lng 정보 필요

// 3depth 시
// 관광지 id 정보가 기본 (이정보로 다른정보 다 가져올수 있나???) 이건 추후 논의

interface Interaction2 {
    type: 'Interaction2';
    tabIdx: number;
    goToPage?: string[];
    selectedData?: {
        id: number;
        pos?: LocationInfo;
    };
}

interface Interaction3 {
    type: 'Interaction3';
    eventTypeId: number;
    id: number;
}

export type Interaction2Type = Interaction2;
export type Interaction3Type = Interaction3;

export type MapInteractionStackType = [Interaction2Type?, Interaction3Type?];
