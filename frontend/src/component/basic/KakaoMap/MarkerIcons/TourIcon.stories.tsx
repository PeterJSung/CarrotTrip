import { ComponentMeta, ComponentStory } from '@storybook/react';

import TourIcon from './TourIcon';

export default {
    title: 'Basic/KakaoMap/MarkerIcons/TourIcon',
    component: TourIcon,
} as ComponentMeta<typeof TourIcon>;

const tourIconTemplate: ComponentStory<typeof TourIcon> = (props) => <TourIcon {...props} />;

export const tourIcon = tourIconTemplate.bind({});
