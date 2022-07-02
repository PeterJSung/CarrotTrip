import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import SignupMBTIContainer from './SignupMBTIContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/SignupMBTIContainer',
    component: SignupMBTIContainer,
    decorators: [(story) => getDummyState(story())],
} as ComponentMeta<typeof SignupMBTIContainer>;

export const signupMBTIContainer = () => <SignupMBTIContainer onMBTIChange={action('MBTI Change')} />;
