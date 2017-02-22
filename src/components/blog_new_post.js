import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createBlogPost } from './../actions/action_index.js';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';
// import createUndoPlugin from 'draft-js-undo-plugin';
import 'draft-js-undo-plugin/lib/plugin.css';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import 'draft-js-linkify-plugin/lib/plugin.css';
import 'draft-js-mention-plugin/lib/plugin.css';

// const undoPlugin = createUndoPlugin();

const hashtagPlugin = createHashtagPlugin();
const mentionPlugin = createMentionPlugin();
const linkifyPlugin = createLinkifyPlugin({
  target: '_blank'  // default is '_self'
});
const richButtonsPlugin = createRichButtonsPlugin();
const {
  // inline buttons
  ItalicButton, BoldButton, MonospaceButton, UnderlineButton,
  // block buttons
  ParagraphButton, BlockquoteButton, CodeButton, OLButton, ULButton, H1Button, H2Button, H3Button, H4Button, H5Button, H6Button
} = richButtonsPlugin;

// const { UndoButton, RedoButton } = undoPlugin;
const plugins = [
  hashtagPlugin,
  linkifyPlugin,
  mentionPlugin,
  richButtonsPlugin
];
const MyIconButton = ({iconName, toggleInlineStyle, isActive, label, inlineStyle, onMouseDown }) =>
  <a onClick={toggleInlineStyle} onMouseDown={onMouseDown}>
    <span
      className={`fa fa-${iconName}`}
      toolTip={label}
      style={{ color: isActive ? '#000' : '#777' }}
    />
  </a>;

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
            <div id='content' className="myToolbar">
               <label> Post Content </label>
               <BoldButton />
               <ItalicButton />
               <UnderlineButton />
               <BlockquoteButton />
               <H1Button />
               <H2Button/>
               <ULButton/>
               <OLButton/>
               <button onClick={this._onBoldClick.bind(this)}>Bold</button>


               <div className='editor'>
               <Editor
                  className='editor'
                  editorState={this.state.editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange}
                  plugins={plugins}
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
