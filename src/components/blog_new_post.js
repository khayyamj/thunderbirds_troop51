import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createBlogPost } from './../actions/action_index.js';
import { Editor, EditorState, RichUtils } from 'draft-js';

class newBlogPost extends Component {
   static contextTypes = {
      router: PropTypes.object
   }

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

   onSubmit(props) {
      console.log('What is editorState: ',this.state.editorState,'blog_new_post props: ',props);
      this.props.createBlogPost(props)
      .then(() => {
         this.context.router.push('/blog');
      })
   }

   render() {
      const { fields: { title, categories, content }, handleSubmit } = this.props;

      return (
         <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Create a New Post</h3>
            <div>
               <label> Title </label>
               <input type='text' className='form-control' {...title} />
            </div>
            <div>
               <label> Categories </label>
               <input type='text' className='form-control' {...categories} />
            </div>
            <div id='content'>
               <label> Post Content </label>
               <button onClick={this._onBoldClick.bind(this)}>Bold</button>
               <div className='editor'>
               <Editor
                  editorState={this.state.editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange}
                  // {...content}
               />
               </div>
            </div>
            <button type='submit' className='nav-btn'>Submit</button>
         </form>
      )
   }

   _onBoldClick() {
     this.onChange(RichUtils.toggleInlineStyle(
       this.state.editorState,
       'BOLD'
     ));
   }
}

export default reduxForm({
   form: 'PostsNewForm',
   fields: ['title', 'categories', 'content'],

}, null, { createBlogPost })(newBlogPost)
