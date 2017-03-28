import {
    KINDERGARTEN_FETCH_SUCCESS,
    ADD_TO_FAVOURITE,
    FAVOURITE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KINDERGARTEN_FETCH_SUCCESS:
            return action.payload;
        case ADD_TO_FAVOURITE:
            return action.payload;
        case FAVOURITE_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
