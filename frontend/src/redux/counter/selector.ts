import { RootState } from "@/redux/rootReducer";

const countSelector = (state: RootState): number => state.counter.count;

export {
    countSelector
}