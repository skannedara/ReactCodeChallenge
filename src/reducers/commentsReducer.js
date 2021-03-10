import { ADD_POST, REMOVE_POST } from '../actions/types';

export default function commentsReducer(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload];
        case REMOVE_POST:
            return state.filter((e) => {
                if (e.id !== action.payload.id) {
                    return true;
                }
                return false;
            });
        default:
            return state;
    }
}