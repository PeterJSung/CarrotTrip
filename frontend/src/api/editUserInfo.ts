import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { RegisterTaste } from 'vo/signup';

export const EDITUSER_MBIT_URL: string = genAPIURLtoBackend('/api/member/mbti');
export const REGISTER_TASTE_URL: string = genAPIURLtoBackend('/api/evaluation/taste/member');

export const updateMBTI = async (nickname: string, mbti: string): Promise<void> => {
    await restPost(EDITUSER_MBIT_URL, {
        nickname,
        mbti,
    });
};
export const registUserTaste = async (reqBody: RegisterTaste): Promise<RegisterTaste> => {
    const response = await restPost<RegisterTaste, RegisterTaste>(REGISTER_TASTE_URL, {
        ...reqBody,
    });
    return response.data;
};
