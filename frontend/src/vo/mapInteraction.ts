// 2 depth 시

import { LocationInfo } from './gps';

// Recommand 시
// 현재 코스타입

// Suggestion 시
// 무슨 Suggestion 인가?
// 어디 위치 클릭했는가? id 와 lat lng 정보 필요

// 3depth 시
// 관광지 id 정보가 기본 (이정보로 다른정보 다 가져올수 있나???) 이건 추후 논의

export type StackType = 'Redirect' | 'PlaceDetail' | 'Suggestion';

export interface PlaceDetailInfo {
    eventTypeId: number;
    id: number;
}

export interface SuggestionInfo {
    tabIdx: number;
    selectedData?: {
        id: number;
        pos?: LocationInfo;
    };
}

export interface StackInfo {
    type: StackType;
    data: PlaceDetailInfo | SuggestionInfo;
}

export type MapInteractionStackType = StackInfo[];
