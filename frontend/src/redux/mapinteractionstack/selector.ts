import { RootState } from 'redux/rootReducer';
import { specializeContentId, Suggestion_Event_Type } from 'vo/travelInfo';

const getTypeOneData = (state: RootState) => state.mapDispStack.data[0];
const getTypeTwoData = (state: RootState) => state.mapDispStack.data[1];
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

export { getCurrentInteractionType, getTypeOneData, getTypeTwoData };
