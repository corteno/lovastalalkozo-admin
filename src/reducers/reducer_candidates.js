import {GET_CANDIDATES} from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CANDIDATES:
            return action.payload.data;

        default:
            return state;
    }
};