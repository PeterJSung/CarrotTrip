import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExpandableBanner from './ExpandableBanner';

export default {
    title: 'Container/ExpandableBanner',
    component: ExpandableBanner,
    argTypes: {
        upperText: {
            name: '제목',
            defaultValue: '이것은 제목위치입니다.',
        },
        lowerText: {
            name: '부 제목',
            defaultValue: '이것은 부제목위치입니다. 제목아래에있습니다',
        },
        isFilled: {
            type: 'boolean',
            name: 'Check 여부',
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof ExpandableBanner>;

const expandableBannerTemplate: ComponentStory<typeof ExpandableBanner> = (props) => <ExpandableBanner {...props} />;

export const expandableBanner = expandableBannerTemplate.bind({});
expandableBanner.args = {
    onClick: action('Expand Click'),
};
