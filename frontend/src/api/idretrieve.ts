import { restGet } from 'common/http';
import { IdRetrieveReq } from 'vo/signup';

export const ID_EXIST_URL: string = '/api/join/isExistNickname';

export const getUserExist = async (username: string): Promise<boolean> => {
    const response = await restGet<IdRetrieveReq, boolean>(ID_EXIST_URL, {
        data: {
            nickName: username,
        },
    });
    return response.data;
};

export const mockGetUserExist = {
    url: ID_EXIST_URL,
    method: 'GET',
    status: 200,
    response: {
        data: false,
    },
};
