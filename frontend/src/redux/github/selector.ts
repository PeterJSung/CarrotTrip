import { GithubProfile } from "@/api/github";
import { AsyncInfo } from "@/redux/common";
import { RootState } from "@/redux/rootReducer";

const asyncSelector = (state: RootState): AsyncInfo => state.github.asyncInfo;
const githubProfileSelector = (state: RootState): GithubProfile | null => state.github.data;

export {
    asyncSelector,
    githubProfileSelector
}