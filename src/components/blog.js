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
    this.getTags = this.getTags.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts()
  }

  getTags(post) {
    let tags = [];
    for (let x = 0; x < this.props.posts.length; x++) {
      if (post.blogid === this.props.posts[x].blogid) {
        tags.push(this.props.posts[x].tags)
      }
    }
    return (
      tags.map((tag) => {
        return (tag + ', ')
      })
    )
  }

  renderPosts() {
    const renderedPosts = [];
    return this.props.posts.map((post) => {
      this.getTags(post)
      if (post.blogid != this.props.posts.indexOf(post.blogid)) {
        return (
          <List key={post.blogid}>
          <List.Content>
              <List.Header> Title: {post.title} <br /> </List.Header>
              <List.Description> Date: {post.date_published}</List.Description>
              <List.Description> Tags: {this.getTags(post)} <br /> </List.Description>
              <List.Description> Post:  <div dangerouslySetInnerHTML={{__html:post.content}} /> </List.Description>
            </List.Content>
            <hr />
          </List>
        )
      }
    })
  }

  _goToNewPost() {
    browserHistory.push('/newpost')
  }

  render() {
    if (!this.props.posts) {
      return <div></div>
    }
    return(
      <div>
        <Button color='orange' floated='right' onClick={this._goToNewPost.bind(this)}>
          Add New Post
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
