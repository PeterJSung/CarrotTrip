import { AsyncInfo } from 'redux/common';
import { RootState } from 'redux/rootReducer';
import { GithubProfile } from 'vo/github';

const asyncSelector = (state: RootState): AsyncInfo => state.github.asyncInfo;
const githubProfileSelector = (state: RootState): GithubProfile | null => state.github.data;

export { asyncSelector, githubProfileSelector };
