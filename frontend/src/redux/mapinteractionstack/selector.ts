import { RootState } from 'redux/rootReducer';

const getMapInteractionStack = (state: RootState) => state.mapDispStack.data;

export { getMapInteractionStack };
