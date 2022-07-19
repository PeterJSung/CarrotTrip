import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { SigninBodyReq, SigninBodyRes } from 'vo/signin';

export const SIGNIN_URL: string = genAPIURLtoBackend('/api/login');
export const REGISTER_ATTRACTION_URL: string = genAPIURLtoBackend('/api/evaluation/category');

export const postSignin = async (reqBody: SigninBodyReq): Promise<SigninBodyRes | string> => {
    try {
        const response = await restPost<SigninBodyReq, SigninBodyRes>(SIGNIN_URL, {
            ...reqBody,
        });
        return response.data;
    } catch (e: any) {
        return e.response.data.message;
    }
};
