import { SELECT_KINDERGARTEN } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_KINDERGARTEN:
            return action.payload;
        default:
            return state;
    }
};

