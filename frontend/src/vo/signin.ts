import { SigninInSignupInfo } from './signup';

export interface SigninBodyReq {
    nickname: string;
    password: string;
}

export interface SigninBodyRes {
    nickname: string;
    mbti?: string;
}

export interface SessionInterface {
    data: SigninInSignupInfo | string;
}
