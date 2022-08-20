import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { SigninBodyReq, SigninBodyRes } from 'vo/signin';

export const SIGNIN_URL: string = genAPIURLtoBackend('/api/login');

export const postSignin = async (reqBody: SigninBodyReq): Promise<SigninBodyRes> => {
    const response = await restPost<SigninBodyReq, SigninBodyRes>(SIGNIN_URL, {
        ...reqBody,
    });
    return response.data;
};
