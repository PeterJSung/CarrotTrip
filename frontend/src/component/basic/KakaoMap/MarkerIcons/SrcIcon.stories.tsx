import { ComponentMeta, ComponentStory } from '@storybook/react';

import SrcIcon from './SrcIcon';

export default {
    title: 'Basic/KakaoMap/MarkerIcons/SrcIcon',
    component: SrcIcon,
    argTypes: {
        src: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof SrcIcon>;

const srcIconTemplate: ComponentStory<typeof SrcIcon> = (props) => <SrcIcon {...props} />;

export const srcIcon = srcIconTemplate.bind({});
srcIcon.args = {
    src: 'https://picsum.photos/800',
};
