// 2 depth 시

// Recommand 시
// 현재 코스타입

// Suggestion 시
// 무슨 Suggestion 인가?
// 어디 위치 클릭했는가? id 와 lat lng 정보 필요

// 3depth 시
// 관광지 id 정보가 기본 (이정보로 다른정보 다 가져올수 있나???) 이건 추후 논의

export interface Interaction2Recommand {
    type: 'Interaction2Recommand';
    courseIdx: number;
}

export interface Interaction2Suggestion {
    type: 'Interaction2Suggestion';
    suggestionIdx: number;
    selectedData: {
        id: number;
        lng: number;
        lat: number;
    };
}

export interface Interaction3 {
    type: 'Interaction3';
    id: number;
}

export type Interaction2Type = Interaction2Recommand | Interaction2Suggestion;
export type Interaction3Type = Interaction3;

export type MapInteractionStackType = [Interaction2Type?, Interaction3Type?];
