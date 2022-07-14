import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import KakaoMapBottomSheetContainer from './KakaoMapBottomSheetContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/KakaoMapBottomSheetContainer',
    component: KakaoMapBottomSheetContainer,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof KakaoMapBottomSheetContainer>;

export const kakaoMapBottomSheetContainer = () => <KakaoMapBottomSheetContainer mode={1} open={true} />;
