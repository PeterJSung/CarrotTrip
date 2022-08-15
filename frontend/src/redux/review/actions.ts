import { createAction } from 'typesafe-actions';
import { UpdateReviewVO } from 'vo/review';

export enum ReviewActions {
    UPDATE_REVIEWDATA = 'USERINFO/UPDATE_REVIEWDATA',
}

export const updateReviewInfoAction = createAction(ReviewActions.UPDATE_REVIEWDATA)<UpdateReviewVO>();
