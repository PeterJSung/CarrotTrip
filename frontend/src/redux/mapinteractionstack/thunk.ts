import { cloneDeep } from 'lodash';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { MapInteractionStackType, StackInfo } from 'vo/mapInteraction';
import { mapUpdateStackeAction } from './actions';
import { MapDispStackAction } from './reducer';

export const updateInetractionStack = (
    type: 'push' | 'pop',
    stackInfo?: StackInfo,
): ThunkAction<void, RootState, null, MapDispStackAction> => {
    return async (dispatch, getState) => {
        const currentDispStack = getState().mapDispStack;
        const newRet: MapInteractionStackType = cloneDeep(currentDispStack.data);
        switch (type) {
            case 'push':
                if (stackInfo) {
                    if (newRet.length > 0 && newRet[newRet.length - 1].type == stackInfo.type) {
                        newRet.pop();
                    }
                    newRet.push(stackInfo);
                }
                break;
            case 'pop':
                newRet.pop();
                break;
        }
        await dispatch(mapUpdateStackeAction(newRet));
    };
};
