import { ComponentMeta, ComponentStory } from '@storybook/react';

import EctIcon from './EctIcon';

export default {
    title: 'Basic/KakaoMap/MarkerIcons/EctIcon',
    component: EctIcon,
} as ComponentMeta<typeof EctIcon>;

const ectIconTemplate: ComponentStory<typeof EctIcon> = (props) => <EctIcon {...props} />;

export const ectIcon = ectIconTemplate.bind({});
