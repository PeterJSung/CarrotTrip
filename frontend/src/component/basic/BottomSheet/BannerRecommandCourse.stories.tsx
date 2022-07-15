import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import BannerRecommandCourse from './BannerRecommandCourse';

export default {
    title: 'Basic/BottomSheet/BannerRecommandCourse',
    component: BannerRecommandCourse,
    argTypes: {
        onClick: {
            table: {
                disable: true,
            },
        },
        distanceInfo: {
            type: 'number',
            name: '거리 1000미터 이하는 M 로표기 그이상은 KM',
            defaultValue: 50,
        },
        endInfo: {
            name: '도착정보',
            defaultValue: {
                id: 1,
                src: 'https://picsum.photos/800',
                title: 'End Title',
            },
        },
        startInfo: {
            name: '도착정보',
            defaultValue: {
                id: 2,
                src: 'https://picsum.photos/700',
                title: 'Start Title',
            },
        },
    },
} as ComponentMeta<typeof BannerRecommandCourse>;

const bannerRecommandCourseTemplate: ComponentStory<typeof BannerRecommandCourse> = (props) => (
    <BannerRecommandCourse {...props} />
);

export const bannerRecommandCourse = bannerRecommandCourseTemplate.bind({});
bannerRecommandCourse.args = {
    onClick: action('Click Region Area'),
};
