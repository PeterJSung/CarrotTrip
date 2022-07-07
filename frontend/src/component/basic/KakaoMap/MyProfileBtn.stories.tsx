import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';

import MyProfileBtn from './MyProfileBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/MyProfileBtn',
    component: MyProfileBtn,
} as ComponentMeta<typeof MyProfileBtn>;

export const myProfileBtn = () => <MyProfileBtn onClick={action('MyProfileBtn click')} />;
