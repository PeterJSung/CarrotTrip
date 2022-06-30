import { restGet } from 'common/http';
import { IdRetrieveReq } from 'vo/signup';

export const URL: string = 'localhost:8080/api/join/isExistNickname';

export const getUserExist = async (username: string): Promise<boolean> => {
    const response = await restGet<IdRetrieveReq, boolean>(URL, {
        data: {
            nickName: username,
        },
    });
    return response.data;
};
