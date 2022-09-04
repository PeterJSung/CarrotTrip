import { cloneDeep } from 'lodash';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { Interaction2Type, Interaction3Type, MapInteractionStackType } from 'vo/mapInteraction';
import { mapUpdateStackeAction } from './actions';
import { MapDispStackAction } from './reducer';

const isIntersaction2 = (inform: Interaction2Type | Interaction3Type) => inform.type === 'Interaction2';

const isIntersaction3 = (inform: Interaction2Type | Interaction3Type) => inform.type === 'Interaction3';

export const updateInetractionStack = (
    information?: Interaction2Type | Interaction3Type,
): ThunkAction<void, RootState, null, MapDispStackAction> => {
    return async (dispatch, getState) => {
        const currentDispStack = getState().mapDispStack;
        let newRet: MapInteractionStackType = [];
        if (information) {
            if (
                (currentDispStack.data.length === 0 || currentDispStack.data.length === 1) &&
                isIntersaction2(information)
            ) {
                newRet[0] = cloneDeep(information as Interaction2Type);
            } else if (
                (currentDispStack.data.length === 1 || currentDispStack.data.length === 2) &&
                isIntersaction3(information)
            ) {
                newRet = cloneDeep(currentDispStack.data);
                newRet[1] = cloneDeep(information as Interaction3Type);
            }
        } else {
            newRet = cloneDeep(currentDispStack.data);
            newRet.length--;
        }
        await dispatch(mapUpdateStackeAction(newRet));
    };
};

export const updateRedirectPage = (redirect?: string[]): ThunkAction<void, RootState, null, MapDispStackAction> => {
    return async (dispatch, getState) => {
        const currentDispStack = getState().mapDispStack;
        const newRet = cloneDeep(currentDispStack.data);

        if (newRet.length > 0 && newRet[0]) {
            if (redirect) {
                newRet[0].goToPage = redirect;
            } else {
                newRet[0].goToPage = undefined;
            }
        }

        await dispatch(mapUpdateStackeAction(newRet));
    };
};
