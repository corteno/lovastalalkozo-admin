import {GET_CANDIDATES, DELETE_CANDIDATE} from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CANDIDATES:
            return action.payload.data;

        case DELETE_CANDIDATE:
            //Returns the state without the deleted item
            return state.filter((item) => item._id !== action.payload.data._id);

        default:
            return state;
    }
};