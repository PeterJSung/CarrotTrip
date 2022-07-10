import { restGet } from 'common/http';
import { DEFAULT_LOCALE_CODE, LocaleCode } from 'vo/locale';
import { EvaluationAreaRes } from 'vo/signup';

export const ID_EVALUATION_AREA_URL: string = '/api/evaluation/dummy/lang';

export const getEvaluationArea = async (locale: LocaleCode): Promise<EvaluationAreaRes[]> => {
    const response = await restGet<{}, EvaluationAreaRes[]>(`${ID_EVALUATION_AREA_URL}/${locale}`);
    return response.data;
};

export const mockGetEvaluationArea = {
    url: `${ID_EVALUATION_AREA_URL}/${DEFAULT_LOCALE_CODE}`,
    method: 'GET',
    status: 200,
    response: [
        {
            contentId: 128767,
            name: '을왕리해수욕장',
            address: '인천광역시 중구 용유서로302번길 16-15',
            thumbnail1: 'http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg',
            thumbnail2: 'http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg',
        },
        {
            contentId: 124552,
            name: '광화문',
            address: '서울특별시 종로구 세종로 사직로 161',
            thumbnail1:
                'https://www.kogl.or.kr/upload_recommend/%ec%a7%80%ec%97%ad%eb%b3%84%ea%b4%80%ea%b4%91%ec%a7%80/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c/%ec%a2%85%eb%a1%9c/thumb_%ea%b4%91%ed%99%94%eb%ac%b8_001.jpg',
            thumbnail2:
                'https://www.kogl.or.kr/upload_recommend/%ec%a7%80%ec%97%ad%eb%b3%84%ea%b4%80%ea%b4%91%ec%a7%80/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c/%ec%a2%85%eb%a1%9c/thumb_%ea%b4%91%ed%99%94%eb%ac%b8_001.jpg',
        },
    ],
};
