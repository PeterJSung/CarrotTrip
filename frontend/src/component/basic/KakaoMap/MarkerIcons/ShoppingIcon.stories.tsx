import { ComponentMeta, ComponentStory } from '@storybook/react';

import ShoppingIcon from './ShoppingIcon';

export default {
    title: 'Basic/KakaoMap/MarkerIcons/ShoppingIcon',
    component: ShoppingIcon,
} as ComponentMeta<typeof ShoppingIcon>;

const shoppingIconTemplate: ComponentStory<typeof ShoppingIcon> = (props) => <ShoppingIcon {...props} />;

export const shoppingIcon = shoppingIconTemplate.bind({});
