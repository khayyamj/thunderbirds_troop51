import React, { Component } from 'react';
import BlogContentEditor from './post_new';


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
  }

  tagInputChange(event) {
    const tagArray = event.target.value.split(',');
    this.setState({ tags: tagArray });
  }

  render() {

    return(

      <div>
         Blog Page <br />
         <form>
         <input
            type='text'
            value={this.state.title}
            placeholder='Post Headline'
            onChange={this.inputChange} /> {this.state.title}
         <BlogContentEditor blogProps={this.state}/>
         <input
            type='text'
            value={this.state.tags}
            placeholder='Tags'
            onChange={this.tagInputChange} />
        </form>
      </div>
    );
  }
}
export default Blog;
