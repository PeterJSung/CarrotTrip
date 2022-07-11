export interface IdRetrieveRes {
    data: boolean;
    message: string;
    statusCode: string;
}

export interface EvaluationAreaRes {
    contentId: number;
    name: string;
    address: string;
    thumbnail1: string;
    thumbnail2: string;
}

export interface SignUpDisplayData {
    buttonText: string;
    isDisable: boolean;
}

export interface SignupInfo1Data {
    nickName: string;
    pw: string;
    pwConfirm: string;
}

export interface TourAreaInfo {
    score: number;
    attraction: number[];
}

export type SignupInfo2Data = TourAreaInfo & { id: number };

export interface SignupBanner2Data {
    [key: number]: TourAreaInfo;
}

export interface CombinedSignupData<T> {
    disp: SignUpDisplayData;
    userInfo: T;
}
