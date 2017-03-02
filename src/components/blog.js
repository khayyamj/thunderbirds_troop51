import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import BlogContentEditor from './post_new';
import { createBlogPost } from './../actions/action_index';


class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      tags: [],
      content: '',
      displayBtn: 'noDisplay'
    }
    this.inputChange = this.inputChange.bind(this);
    this.tagInputChange = this.tagInputChange.bind(this);
  }

  inputChange(event) {
    this.setState({
      title: event.target.value,
      content: this.props.blogpost
    });
    if (this.props.blogpost) {
      this.setState({displayBtn: 'display'})
    }
  }

  tagInputChange(event) {
    const tagArray = event.target.value.split(',');
    this.setState({ tags: tagArray });
    if (this.props.blogpost) {
      this.setState({displayBtn: 'display'})
    }
  }

  createPost(props) {
    this.setState ({ content: this.props.blogpost});
  }

  render() {
    const { fields: {title, content, tags}, handleSubmit } = this.props;

    this.props.fields.content.value = this.props.blogpost.content;
    return(

      <div>
        <form onSubmit={handleSubmit(this.props.createBlogPost)}>
          <input
            type='text'
            value={this.state.title}
            placeholder='Post Headline'
            onChange={this.inputChange}
            {...title}
            className="noDisplay"/> <br />
            {title.touched ? title.error : ''}
          <BlogContentEditor />
          <input
            value={this.props.blogpost.content}
            {...content}
            className="noDisplay" />
            {content.touched ? content.error : ''}
          <input
            type='text'
            value={this.state.tags}
            placeholder='Tags (separate tags with ,)'
            onChange={this.tagInputChange}
            {...tags}
            className="noDisplay"/> {tags.touched ? tags.error : ''} <br />
          <button
            type='submit'
            className={this.state.displayBtn} >
            Publish
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { blogpost: state.posts.post}
}
export default reduxForm({
  form: 'BlogPost',
  fields: ['title', 'content', 'tags']
}, mapStateToProps, {createBlogPost})(Blog);
