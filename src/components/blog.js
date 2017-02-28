import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import BlogContentEditor from './post_new'

class Blog extends Component {


  render() {
    return(
      <div>
         Blog Page <br />
         <BlogContentEditor />
      </div>
    );
  }
}
export default Blog;
