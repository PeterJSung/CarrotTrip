import { ComponentMeta } from '@storybook/react';

import ReviewItem, { ReviewItemProps } from './ReviewItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/ReviewItem',
    component: ReviewItem,
} as ComponentMeta<typeof ReviewItem>;

const sampleProps: ReviewItemProps = {
    date: '2022.07.26',
    reviewText: `이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. \n\
    이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. \n \
    이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. \n \
    이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. 이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. 이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. 이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. \n \
    이것은 리뷰텍스트입니다 리뷰 리뷰 리뷰 리뷰입니다. `,
    score: 4,
    userName: '유저이름',
};

export const myReviewItem = () => <ReviewItem isMyReview={true} {...sampleProps} />;
export const nonMyReviewItem = () => <ReviewItem {...sampleProps} />;
