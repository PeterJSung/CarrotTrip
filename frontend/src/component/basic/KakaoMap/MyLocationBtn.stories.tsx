import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';

import MyLocationBtn from './MyLocationBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/KakaoMap/MyLocationBtn',
    component: MyLocationBtn,
} as ComponentMeta<typeof MyLocationBtn>;

export const myLocationBtn = () => <MyLocationBtn onClick={action('MyLocationBtn click')} />;
