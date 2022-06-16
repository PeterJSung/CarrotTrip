import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectBox from './SelectBox';

export default {
    title: 'Basic/Signup/SelectBox',
    component: SelectBox,
    argTypes: {
        title: {
            name: '텍스트 타이틀',
        },
        checked: {
            control: {
                type: 'boolean',
            },
            name: '클릭여부',
            defaultValue: false,
        },
        src: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof SelectBox>;

const selectBoxTemplate: ComponentStory<typeof SelectBox> = (props) => <SelectBox {...props} />;

export const selectBox = selectBoxTemplate.bind({});
selectBox.args = {
    src: 'https://picsum.photos/800',
    title: '바다',
    onClick: action('Select Box Click'),
};
