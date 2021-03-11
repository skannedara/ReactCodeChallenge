import { POSTS_FETCHED_DATA, ADD_POST, REMOVE_POST } from './types.js';
import axios from 'axios';

const apiPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
const apiCommentsUrl = 'https://jsonplaceholder.typicode.com/comments/';

const getCommentsForPost = (comments, id) => {
    const allComments = [];
    comments.map((comment) => {
      if (comment.postId === id) {
        allComments.push(comment);
      }
    });
    return allComments;
};
  
const finalPostsWithComments = (posts, comments) => {
    const allPosts = [];
    posts.map((post) => {
        allPosts.push({
        ...post,
        comments: getCommentsForPost(comments, post.id),
        })
    })
    return allPosts;
};

  
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
};

export const fetchDataPosts = () => {
    return (dispatch) => {
        return axios.get(apiPostsUrl)
            .then(posts => {
                return axios.get(apiCommentsUrl)
                .then(comments => {
                    return finalPostsWithComments(posts.data, comments.data)
                })
                .catch(error => {
                    return null;
                });
            })
            .then(data => {
                dispatch({
                    type: POSTS_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};
