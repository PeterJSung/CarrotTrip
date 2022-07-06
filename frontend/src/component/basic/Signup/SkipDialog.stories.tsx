import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SkipDialog from './SkipDialog';

export default {
    title: 'Basic/Signup/SkipDialog',
    component: SkipDialog,
    argTypes: {
        onClick: {
            table: {
                disable: true,
            },
        },
        open: {
            control: 'boolean',
            type: 'boolean',
            name: '팝업 열기',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof SkipDialog>;

const skipDialogTemplate: ComponentStory<typeof SkipDialog> = (props) => <SkipDialog {...props} />;

export const skipDialog = skipDialogTemplate.bind({});
skipDialog.args = {
    onClick: action('Skip Click'),
};
