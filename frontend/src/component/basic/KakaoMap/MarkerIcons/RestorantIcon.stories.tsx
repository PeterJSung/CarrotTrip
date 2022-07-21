import { ComponentMeta, ComponentStory } from '@storybook/react';

import RestorantIcon from './RestorantIcon';

export default {
    title: 'Basic/KakaoMap/MarkerIcons/RestorantIcon',
    component: RestorantIcon,
} as ComponentMeta<typeof RestorantIcon>;

const restorantIconTemplate: ComponentStory<typeof RestorantIcon> = (props) => <RestorantIcon {...props} />;

export const restorantIcon = restorantIconTemplate.bind({});
