import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectChip from './SelectChip';

export default {
    title: 'Basic/Signup/SelectChip',
    component: SelectChip,
    argTypes: {
        checked: {
            control: {
                type: 'boolean',
            },
            name: '클릭여부',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof SelectChip>;

const selectChipTemplate: ComponentStory<typeof SelectChip> = (props) => <SelectChip {...props} />;

export const selectChip = selectChipTemplate.bind({});
selectChip.args = {
    title: 'test',
    onClick: action('Chip Click'),
};
