import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectSquareBox from './SelectSquareBox';

export default {
    title: 'Basic/Signup/SelectSquareBox',
    component: SelectSquareBox,
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
} as ComponentMeta<typeof SelectSquareBox>;

const selectSquareBoxTemplate: ComponentStory<typeof SelectSquareBox> = (props) => <SelectSquareBox {...props} />;

export const selectSquareBox = selectSquareBoxTemplate.bind({});
selectSquareBox.args = {
    src: 'https://picsum.photos/800',
    title: '바다',
    onClick: action('Select Box Click'),
};
