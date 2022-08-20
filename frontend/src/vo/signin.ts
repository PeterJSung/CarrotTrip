import { SigninInSignupInfo } from './signup';

export interface SigninBodyReq {
    nickname: string;
    password: string;
}

export interface SigninBodyRes {
    nickname: string;
    tasteList: TasteAPIBody[];
    mbti?: string;
}

export interface SessionInterface {
    data: SigninInSignupInfo;
}

export interface TasteAPIBody {
    id: number;
    memberNickname: string;
    tasteCode: string;
}
