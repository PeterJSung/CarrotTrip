import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectMBTIButton from './SelectMBTIButton';
import { MBTI_LIST } from './signupconstants';

export default {
    title: 'Basic/Signup/SelectMBTIButton',
    component: SelectMBTIButton,
    argTypes: {
        checked: {
            control: {
                type: 'boolean',
            },
            name: '클릭여부',
            defaultValue: false,
        },
        type: {
            control: {
                type: 'select',
                options: MBTI_LIST,
            },
            name: 'MBTI 선택',
            defaultValue: MBTI_LIST[0],
        },
    },
} as ComponentMeta<typeof SelectMBTIButton>;

const selectMBTIButtonTemplate: ComponentStory<typeof SelectMBTIButton> = (props) => <SelectMBTIButton {...props} />;

export const selectMBTIButton = selectMBTIButtonTemplate.bind({});
