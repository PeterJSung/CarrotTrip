import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { SignupRegisterAttraction, SignupReqResBody } from 'vo/signup';

export const SIGNUP_URL: string = genAPIURLtoBackend('/api/join');
export const REGISTER_ATTRACTION_URL: string = genAPIURLtoBackend('/api/evaluation/category');

export const postSignup = async (reqBody: SignupReqResBody): Promise<SignupReqResBody> => {
    const response = await restPost<SignupReqResBody, SignupReqResBody>(SIGNUP_URL, {
        ...reqBody,
    });
    return response.data;
};

export const postRegistUserAttraction = async (
    reqBody: SignupRegisterAttraction,
): Promise<SignupRegisterAttraction> => {
    const response = await restPost<SignupRegisterAttraction, SignupRegisterAttraction>(REGISTER_ATTRACTION_URL, {
        ...reqBody,
    });
    return response.data;
};
