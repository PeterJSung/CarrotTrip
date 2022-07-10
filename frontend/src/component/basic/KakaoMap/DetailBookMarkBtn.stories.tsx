import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import DetailBookMarkBtn from './DetailBookMarkBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/DetailBookMarkBtn',
    component: DetailBookMarkBtn,
    argTypes: {
        isMarked: {
            control: 'boolean',
            name: 'Is Marked?',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof DetailBookMarkBtn>;

const detailBookMarkBtnTemplate: ComponentStory<typeof DetailBookMarkBtn> = (props) => <DetailBookMarkBtn {...props} />;
export const detailBookMarkBtn = detailBookMarkBtnTemplate.bind({});
detailBookMarkBtn.args = {
    onClick: action('DetailPlaceBackBtn Click'),
};
