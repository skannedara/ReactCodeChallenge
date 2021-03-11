import { POSTS_FETCHED_DATA } from '../actions/types';

export default function postsReducer(state = [], action) {
    switch (action.type) {

        case POSTS_FETCHED_DATA:
            return [ ...action.payload];
        default:
            return state;
    }
}
