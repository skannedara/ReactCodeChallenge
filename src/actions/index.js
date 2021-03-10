import { ADD_FETCHED_DATA, ADD_POST, REMOVE_POST } from './types.js';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const addPosts =  (data) => {
    return {
      type: ADD_POST,
      payload: {
        userId: data.userId,
        id: data.id,
        title: data.title,
        body: data.body
      }
    }
};

export const removePosts = id => {
    return {
      type: REMOVE_POST,
      payload: {
        id
      }
    }
}

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                console.log(data);
                dispatch({
                    type: ADD_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};
