import { ComponentMeta } from '@storybook/react';
import { dummyRouter, getDummyState } from '../../stories/common.stories';
import LandingPage from './LandingPage';

export default {
    title: 'Page/LandingPage',
    component: LandingPage,
    decorators: [(story) => getDummyState(dummyRouter(story()))],
} as ComponentMeta<typeof LandingPage>;

export const landingPage = () => <LandingPage />;
