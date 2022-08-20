import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { SignupRegisterTaste, SignupReqResBody } from 'vo/signup';

export const SIGNUP_URL: string = genAPIURLtoBackend('/api/join');
export const REGISTER_TASTE_URL: string = genAPIURLtoBackend('/api/evaluation/taste/member');

export const postSignup = async (reqBody: SignupReqResBody): Promise<SignupReqResBody> => {
    const response = await restPost<SignupReqResBody, SignupReqResBody>(SIGNUP_URL, {
        ...reqBody,
    });
    return response.data;
};

export const postRegistUserTaste = async (reqBody: SignupRegisterTaste): Promise<SignupRegisterTaste> => {
    const response = await restPost<SignupRegisterTaste, SignupRegisterTaste>(REGISTER_TASTE_URL, {
        ...reqBody,
    });
    return response.data;
};
