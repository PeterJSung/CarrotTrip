import { RootState } from 'redux/rootReducer';
import { PlaceDetailInfo, StackType, SuggestionInfo } from 'vo/mapInteraction';

const getTopStackType = (state: RootState): StackType | undefined =>
    state.mapDispStack.data.length > 0 ? state.mapDispStack.data[state.mapDispStack.data.length - 1].type : undefined;

const getSuggestionData = (state: RootState): SuggestionInfo | undefined => {
    const len = state.mapDispStack.data.length;
    if (len > 0 && state.mapDispStack.data[len - 1].type === 'Suggestion') {
        return state.mapDispStack.data[len - 1].data as SuggestionInfo;
    } else {
        return undefined;
    }
};

const getPlaceDetailData = (state: RootState): PlaceDetailInfo | undefined => {
    const len = state.mapDispStack.data.length;
    if (len > 0 && state.mapDispStack.data[len - 1].type === 'PlaceDetail') {
        return state.mapDispStack.data[len - 1].data as PlaceDetailInfo;
    } else {
        return undefined;
    }
};

const isSuggestionSelector = (state: RootState): boolean => {
    const type = getTopStackType(state);
    return type !== undefined && type === 'Suggestion';
};

const isPlaceDetailSelector = (state: RootState): boolean => {
    const type = getTopStackType(state);
    return type !== undefined && type === 'PlaceDetail';
};

const isRedirectSelector = (state: RootState): boolean => {
    const type = getTopStackType(state);
    return type !== undefined && type === 'Redirect';
};

const getStackData = (state: RootState) => state.mapDispStack.data;
/*
const getCurrentInteractionType = (state: RootState): Suggestion_Event_Type => {
    const interactionStack = state.mapDispStack.data;
    if (interactionStack.length === 1 && interactionStack[0]) {
        if (specializeContentId.includes(interactionStack[0].tabIdx)) {
            return 'FILTER';
        } else if (interactionStack[0].tabIdx === 300) {
            return 'ETC';
        } else if (interactionStack[0].tabIdx === 200) {
            return 'MBTI';
        } else if (interactionStack[0].tabIdx === 100) {
            return 'COURSE';
        } else if (interactionStack[0].tabIdx === 400) {
            return 'TENDENCY';
        }
    } else if (interactionStack.length === 2 && interactionStack[1]) {
        return 'PLACEDETAIL';
    }
    return 'NONE';
};
*/
export {
    getTopStackType,
    getSuggestionData,
    getPlaceDetailData,
    isSuggestionSelector,
    isPlaceDetailSelector,
    isRedirectSelector,
    getStackData,
};
