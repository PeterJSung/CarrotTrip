export interface PlaceBasicInformation {
    placename: string;
    placeType: string;
}

export interface PlaceDetailInformation {
    description: string;
    adress: string;
    moodArr: number[];
    mbtiArr: PlaceBookmarkInfo[];
    reviewArr: PlaceReviewRetiriveInfo[];
}

export interface PlaceDetailInformation {
    description: string;
    adress: string;
    moodArr: number[];
    mbtiArr: PlaceBookmarkInfo[];
    reviewArr: PlaceReviewRetiriveInfo[];
}

export interface WritedReviewInfo {
    rating: number;
    reviewText: string;
}

export interface PlaceBookmarkInfo {
    mbtiStr: string;
    percentage: number;
}

export type PlaceReviewRetiriveInfo = {
    userNickName: string;
    userThumbnail: string;
    date: string;
} & WritedReviewInfo;
