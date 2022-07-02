export interface IdRetrieveReq {
    nickName: string;
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

export interface CombinedSignupData<T> {
    disp: SignUpDisplayData;
    userInfo: T;
}
