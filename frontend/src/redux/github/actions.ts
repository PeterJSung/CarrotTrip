import { createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import { GithubProfile } from 'vo/github';

export enum GithubProfileActions {
    GET_USER_PROFILE = 'github/GET_USER_PROFILE',
    GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS',
    GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR',
}

export const getUserProfileAsync = createAsyncAction(
    GithubProfileActions.GET_USER_PROFILE,
    GithubProfileActions.GET_USER_PROFILE_SUCCESS,
    GithubProfileActions.GET_USER_PROFILE_ERROR,
)<undefined, GithubProfile, AxiosError>();
