import { restGet } from 'common/http';
import { IdRetrieveRes } from 'vo/signup';

export const ID_EXIST_URL: string = '/api/join/isExistNickname';

export const getUserExist = async (username: string): Promise<boolean> => {
    const response = await restGet<{}, IdRetrieveRes>(`${ID_EXIST_URL}/${username}`);
    return response.data.data;
};
