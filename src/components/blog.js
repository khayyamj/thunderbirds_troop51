import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import BlogContentEditor from './post_new'

class Blog extends Component {
   constructor(props) {
      super(props);
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
      this.handleKeyCommand = this.handleKeyCommand.bind(this);
   }
   handleKeyCommand(command) {
      const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
      if (newState) {
         this.onChange(newState);
         return 'handled';
      }
      return 'not-handled';
   }

  render() {
    const url = 'http://www.work-stress-solutions.com/images/blog.png';
    return(
      <div>
         Blog Page <br />
         <img src={url} /> <br />
         Utilize <a href='https://facebook.github.io/draft-js/'>Draft.js</a> for text editing in blog. <hr />
         <BlogContentEditor />
      </div>
    );
  }
}
export default Blog;
