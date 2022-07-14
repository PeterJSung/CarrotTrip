import { createAction } from 'typesafe-actions';
import { MapInteractionStackType } from 'vo/mapInteraction';

export enum MapDispActions {
    UPDATE_STACK = 'MAPDISP/UPDATE_STACK',
}

export const mapUpdateStackeAction = createAction(MapDispActions.UPDATE_STACK)<MapInteractionStackType>();
