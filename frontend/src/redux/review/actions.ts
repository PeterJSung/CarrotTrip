import { createAction } from 'typesafe-actions';
import { SigninInSignupInfo } from 'vo/signup';

export enum ReviewActions {
    UPDATE_REVIEWDATA = 'USERINFO/UPDATE_REVIEWDATA',
}

export const updateReview = createAction(ReviewActions.UPDATE_REVIEWDATA)<SigninInSignupInfo>();
