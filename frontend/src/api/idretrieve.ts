import { restGet } from 'common/http';
import { IdRetrieveRes } from 'vo/signup';

export const ID_EXIST_URL: string = '/api/join/isExistNickname';

export const getUserExist = async (username: string): Promise<boolean> => {
    const response = await restGet<{}, IdRetrieveRes>(`${ID_EXIST_URL}/${username}`);
    console.log(response);
    return response.data.data;
};

const sampleResMock: IdRetrieveRes = {
    data: false,
    message: 'TESTMSG',
    statusCode: 'TESTCODE',
};

export const mockGetUserExist = {
    url: `${ID_EXIST_URL}/:id`,
    method: 'GET',
    status: 200,
    response: sampleResMock,
};
