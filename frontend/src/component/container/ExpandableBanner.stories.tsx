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
        isExpand: {
            type: 'boolean',
            name: 'Expand 여부',
        },
        src: {
            table: {
                disable: true,
            },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof ExpandableBanner>;

const expandableBannerTemplate: ComponentStory<typeof ExpandableBanner> = (props) => (
    <ExpandableBanner {...props}>
        <p>애니메이션 적용이 안됩니다. 확장 애니메이션은 SignupBanner Conatiner 를 참조하세요</p>
    </ExpandableBanner>
);

export const expandableBanner = expandableBannerTemplate.bind({});
expandableBanner.args = {
    src: 'https://picsum.photos/800',
    onClick: action('Expand Click'),
};
