import React from 'react';
import { connect } from 'react-redux';
import { addPosts, removePosts } from './actions';

const mapStateToProps = state => {
    return {
        comments: state.comments,
        posts: state.posts
    };
};


class ForumPosts extends React.Component {

    state = {
        showComments: false
    }


    togglePosts(showComments) {
        this.setState({ showComments });
    }
    render() {
            return (
                <div>
                    <h1>Forum Posts</h1>
                    <div>
                        {this.props.posts.map((post, index) => {
                            return (
                                <div key={index}>
                                    <h1> {post.title}</h1>
                                    <p> {post.body}</p>
                                    <button onClick={() => this.props.dispatch(removePosts(post.id))}>
                                        Remove from favorites</button>

                                </div>
                            );
                        })}
                    </div>
                </div>
            )
    }
}
export default connect(mapStateToProps, null)(ForumPosts);