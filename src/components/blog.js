import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPosts } from './../actions/action_index';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div key={post.blogid}>
          Title: {post.title} <br />
          Tags: {post.tags} <br />
          Post:  <div dangerouslySetInnerHTML={{__html:post.content}} />
          <hr />
        </div>
      )
    })
  }

  render() {
    return(
      <div>
      Posts go here...
      {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
};
var mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
