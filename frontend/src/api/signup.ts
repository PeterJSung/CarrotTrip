import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { SignupReqResBody } from 'vo/signup';

export const SIGNUP_URL: string = genAPIURLtoBackend('/api/join');

export const postSignup = async (reqBody: SignupReqResBody): Promise<SignupReqResBody> => {
    const response = await restPost<SignupReqResBody, SignupReqResBody>(SIGNUP_URL, {
        ...reqBody,
    });
    return response.data;
};
