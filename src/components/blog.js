import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPosts } from './../actions/action_index';
import { List, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';


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
        <List key={post.blogid}>
        <List.Content key={post.blogid}>
            <List.Header> Title: {post.title} <br /> </List.Header>
            <List.Description> Tags: {post.tags} <br /> </List.Description>
            <List.Description> Post:  <div dangerouslySetInnerHTML={{__html:post.content}} /> </List.Description>
          </List.Content>
          <hr />
        </List>
      )
    })
  }

  render() {
    return(
      <div>
        <Button orange onClick={browserHistory.push('/newpost')}>
          New Post
        </Button>
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
