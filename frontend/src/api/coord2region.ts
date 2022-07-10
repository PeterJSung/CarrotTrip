import { restGet } from 'common/http';
import { getKakaoAuthHeader } from 'common/kakaoparam';
import { KakaoRegionAPIRes } from 'vo/gps';

export const CONVERT_C2R_URL: string = 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json';

export const getC2RData = async (lat: number, lng: number): Promise<KakaoRegionAPIRes> => {
    const response = await restGet<{}, KakaoRegionAPIRes>(CONVERT_C2R_URL, {
        params: {
            x: lng,
            y: lat,
        },
        headers: {
            ...getKakaoAuthHeader,
        },
    });
    return response.data;
};

export const mockGetUserExist = {
    url: CONVERT_C2R_URL,
    method: 'GET',
    status: 200,
    response: false,
};
