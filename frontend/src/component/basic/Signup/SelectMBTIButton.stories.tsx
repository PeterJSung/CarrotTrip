import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectMBTIButton from './SelectMBTIButton';
import { MBTITYPE } from './signupconstants';

const mbtiKeys = Object.values(MBTITYPE);
console.log(mbtiKeys);
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
                options: mbtiKeys,
            },
            name: 'MBTI 선택',
            defaultValue: mbtiKeys[0],
        },
    },
} as ComponentMeta<typeof SelectMBTIButton>;

const selectMBTIButtonTemplate: ComponentStory<typeof SelectMBTIButton> = (props) => <SelectMBTIButton {...props} />;

export const selectMBTIButton = selectMBTIButtonTemplate.bind({});
