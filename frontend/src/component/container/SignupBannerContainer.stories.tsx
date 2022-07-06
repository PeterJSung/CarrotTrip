import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import SignupBannerContainer from './SignupBannerContainer';

export default {
    title: 'Container/SignupBannerContainer',
    component: SignupBannerContainer,
    decorators: [(story) => getDummyState(story())],
    argTypes: {
        id: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof SignupBannerContainer>;

const signupBannerContainerTemplate: ComponentStory<typeof SignupBannerContainer> = (props) => (
    <SignupBannerContainer {...props} />
);

export const signupBannerContainer = signupBannerContainerTemplate.bind({});
signupBannerContainer.args = {
    contentId: 1,
    name: 'test1',
    address: 'test2',
    thumbnail1: 'https://picsum.photos/800',
    thumbnail2: 'https://picsum.photos/800',
};
