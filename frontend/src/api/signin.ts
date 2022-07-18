import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { SigninBodyReqRes } from 'vo/signin';

export const SIGNIN_URL: string = genAPIURLtoBackend('/api/login');
export const REGISTER_ATTRACTION_URL: string = genAPIURLtoBackend('/api/evaluation/category');

export const postSignin = async (reqBody: SigninBodyReqRes): Promise<SigninBodyReqRes> => {
    const response = await restPost<SigninBodyReqRes, SigninBodyReqRes>(SIGNIN_URL, {
        ...reqBody,
    });
    return response.data;
};
