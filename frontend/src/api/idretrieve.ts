import { restGet } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { IdRetrieveRes } from 'vo/signup';

export const ID_EXIST_URL: string = genAPIURLtoBackend('/api/join/isExistNickname');

export const getUserExist = async (username: string): Promise<boolean> => {
    const response = await restGet<{}, IdRetrieveRes>(`${ID_EXIST_URL}/${username}`);
    return response.data.data;
};
