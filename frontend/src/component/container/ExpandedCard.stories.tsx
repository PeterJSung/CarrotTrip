import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExpandedCard from './ExpandedCard';

export default {
    title: 'Container/ExpandedCard',
    component: ExpandedCard,
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
} as ComponentMeta<typeof ExpandedCard>;

const expandedCardTemplate: ComponentStory<typeof ExpandedCard> = (props) => <ExpandedCard {...props} />;

export const expandedCard = expandedCardTemplate.bind({});
expandedCard.args = {
    onClick: action('Expand Click'),
};
