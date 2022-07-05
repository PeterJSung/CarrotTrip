import { ComponentMeta } from '@storybook/react';
import { ID_EVALUATION_AREA_URL } from 'api/evaluationArea';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import { DEFAULT_LOCALE_CODE } from 'vo/locale';
import SignupOnBoard2Layout from './SignupOnBoard2Layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Layout/SignupOnBoard2Layout',
    component: SignupOnBoard2Layout,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof SignupOnBoard2Layout>;

export const signupOnBoard2Layout = () => <SignupOnBoard2Layout />;
signupOnBoard2Layout.parameters = {
    mockData: [
        {
            url: `${ID_EVALUATION_AREA_URL}/${DEFAULT_LOCALE_CODE}`,
            method: 'GET',
            status: 200,
            response: {
                data: [
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
            },
        },
    ],
};
