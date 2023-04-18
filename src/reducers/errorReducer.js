import { GET_ERRORS, RESET_STATE } from '../actions/types';

const initialState = {};

const resetState = {}

export default function foo(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        case RESET_STATE:
            return resetState;
        default: 
            return state;
    }
}