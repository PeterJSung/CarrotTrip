import { restDelete, restGet, restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { PlaceBookMarkHandleAPIReqRes, PlaceBookMarkListAPIRes } from 'vo/placeInfo';

export const CR_BOOKMAKR_URL: string = genAPIURLtoBackend('/api/bookmark');
export const RETRIEVE_BOOKMAKR_URL: string = genAPIURLtoBackend('/api/bookmark');

export const retrieveBookMarkAPI = async (memberNickname: string): Promise<PlaceBookMarkListAPIRes[]> => {
    const response = await restGet<{}, PlaceBookMarkListAPIRes[]>(`${RETRIEVE_BOOKMAKR_URL}/${memberNickname}`);
    return response.data;
};

export const createBookMarkAPI = async (
    memberNickname: string,
    apiId: number,
): Promise<PlaceBookMarkHandleAPIReqRes> => {
    const response = await restPost<PlaceBookMarkHandleAPIReqRes, PlaceBookMarkHandleAPIReqRes>(CR_BOOKMAKR_URL, {
        memberNickname,
        apiId,
    });
    return response.data;
};

export const deleteBookMarkAPI = async (
    memberNickname: string,
    apiId: number,
): Promise<PlaceBookMarkHandleAPIReqRes> => {
    const response = await restDelete<PlaceBookMarkHandleAPIReqRes, PlaceBookMarkHandleAPIReqRes>(CR_BOOKMAKR_URL, {
        data: {
            memberNickname,
            apiId,
        },
        withCredentials: true,
    });
    return response.data;
};
