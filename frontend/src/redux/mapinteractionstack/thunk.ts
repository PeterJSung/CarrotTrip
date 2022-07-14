import { cloneDeep } from 'lodash';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { Interaction2Type, Interaction3Type, MapInteractionStackType } from 'vo/mapInteraction';
import { mapUpdateStackeAction } from './actions';
import { MapDispStackAction } from './reducer';

const isIntersaction2Recommand = (inform: Interaction2Type | Interaction3Type) =>
    inform.type === 'Interaction2Recommand';

const isIntersaction2Suggestion = (inform: Interaction2Type | Interaction3Type) =>
    inform.type === 'Interaction2Suggestion';

const isIntersaction2 = (inform: Interaction2Type | Interaction3Type) =>
    isIntersaction2Recommand(inform) || isIntersaction2Suggestion(inform);

const isIntersaction3 = (inform: Interaction2Type | Interaction3Type) => inform.type === 'Interaction3';

export const updateStack = (
    information: Interaction2Type | Interaction3Type,
): ThunkAction<void, RootState, null, MapDispStackAction> => {
    return async (dispatch, getState) => {
        const currentDispStack = getState().mapDispStack;
        let newRet: MapInteractionStackType = [];
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
        await dispatch(mapUpdateStackeAction(newRet));
    };
};
