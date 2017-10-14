import {
    SET_FRIENDS,
    CLEAR_FRIENDS,
    ADD_FRIEND,
    DELETE_FRIEND,
} from '../actions';

const DEFAULT = [];

export default function (state = DEFAULT, action) {
    switch (action) {
    case SET_FRIENDS:
        return Object.assign([], action.data);
    case CLEAR_FRIENDS:
        return [];
    case ADD_FRIEND:
        return Object.assign([], [state, ...action.data]);
    case DELETE_FRIEND: {
        const newState = Object.assign([], state);
        newState.splice(action.data, 1);
        return newState;
    }
    default:
        return state;
    }
}
