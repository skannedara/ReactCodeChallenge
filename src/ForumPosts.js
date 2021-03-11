import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};


class ForumPosts extends React.Component {

    state = {
        showComments: false
    }


    render() {
            return (
                <div>
                    <h1>Forum Posts</h1>
                    <hr/>
                    <div style={{padding: "30px"}}>
                        {this.props.posts?.map((post, index) => {
                            return (
                                <div key={index}>
                                    <h3> {post.title}</h3>
                                    <p> {post.body}</p>
                                    <strong>Comments:</strong>
                                    <div style={{padding: "10px"}}>
                                    {post?.comments?.map((comment, index2) => {
                                        return (<div key={index2}>
                                            <div>{`Name :${comment.name}, e-mail: ${comment.email}`}</div>
                                            <div style={{fontStyle: "italic"}}>{comment.body}</div>
                                            <hr/>
                                        </div>);
                                    })}
                                    </div>
                                    <hr/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
    }
}
export default connect(mapStateToProps, null)(ForumPosts);