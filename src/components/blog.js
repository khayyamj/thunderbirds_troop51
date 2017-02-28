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
    }
    this.inputChange = this.inputChange.bind(this);
    this.tagInputChange = this.tagInputChange.bind(this);
  }

  inputChange(event) {
    this.setState({ title: event.target.value });
    console.log('inputChange...value of content: ', this.props.blogpost.content);
  }

  tagInputChange(event) {
    const tagArray = event.target.value.split(',');
    this.setState({ tags: tagArray });
  }

  createPost(props) {
    this.setState ({ content: this.state.blogpost.content});
    console.log('****** createPost props: ', props);
  }

  render() {
    const { fields: {title, content, tags}, handleSubmit } = this.props;
    return(

      <div>
        <form onSubmit={handleSubmit(this.props.createBlogPost)}>
          <input
            type='text'
            value={this.state.title}
            placeholder='Post Headline'
            onChange={this.inputChange}
            {...title}/> <br />
            {title.touched ? title.error : ''}
          <BlogContentEditor />
            {content.touched ? content.error : ''}
          <input
            type='text'
            value={this.state.tags}
            placeholder='Tags (separate tags with ,)'
            onChange={this.tagInputChange}
            {...tags}/> {tags.touched ? tags.error : ''} <br />
          <button type='submit' className='nav-btn'>Publish</button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter Title';
  }
  if (!values.tags) {
    errors.tags = 'Enter at least one tag';
  }
  // if (!values.content) {
  //   errors.content = 'Please tell your story before publishing'
  // }
  return errors;
}
function mapStateToProps (state) {
  return { blogpost: state.posts}
}
export default reduxForm({
  form: 'BlogPost',
  fields: ['title', 'content', 'tags'],
  validate
}, mapStateToProps, {createBlogPost})(Blog);
