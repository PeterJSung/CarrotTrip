export interface PlaceDetailAPIRes {
    commentList: PlaceReviewDataset[];
    mbtiRanking: { [key: string]: number };
    tasteList: string[];
    overview: string;
}

export interface PlaceReviewDataset {
    id: number;
    memberNickname: string;
    apiId: number;
    score: number;
    comments: string;
    regDt: string;
}

export interface PlaceBookMarkListAPIRes {
    id: number;
    memberNickname: string;
    apiId: number;
}

export interface PlaceBookMarkHandleAPIReqRes {
    memberNickname: string;
    apiId: number;
}

export interface PlaceUpdateAttractInfoReqRes {
    memberNickname: string;
    apiId: number;
    tasteCodes: number[];
}

export interface PlaceUpdateScoreNCommentInfoReqRes {
    memberNickname: string;
    apiId: number;
    score: number;
    comments?: string;
}

export type TotalPlaceInfo = PlaceBasicInformation & PlaceDetailInformation;

export interface PlaceBasicInformation {
    placename: string;
    placeType: string;
}

export interface PlaceDetailInformation {
    description: string;
    adress: string;
    tasteList: number[];
    mbtiArr: PlaceMBTIInfo[];
    reviewArr: PlaceReviewRetiriveInfo[];
}

export interface WritedReviewInfo {
    rating: number;
    reviewText: string;
}

export interface PlaceMBTIInfo {
    mbtiStr: string;
    score: number;
}

export type PlaceReviewRetiriveInfo = {
    userNickName: string;
    userThumbnail: string;
    date: string;
} & WritedReviewInfo;
