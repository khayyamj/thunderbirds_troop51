/* @flow */
import React, {Component} from 'react';
import RichTextEditor, {createEmptyValue} from 'react-rte';
import {convertToRaw} from 'draft-js';
import autobind from 'class-autobind';
import type {EditorValue} from './RichTextEditor';
import { createPostContent, fetchTags, createTags } from './../actions/action_index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



type Props = {};
type State = {
  value: EditorValue;
  format: string;
  readOnly: boolean;
};

class BlogEditor extends Component {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      value: createEmptyValue(),
      format: 'html',
      readOnly: false,
      title: '',
      tags: [],
      content: '',
      display: 'noDisplay',
      authorid: 0
    };
    this.handleButtonSave = this.handleButtonSave.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.tagChange = this.tagChange.bind(this);
    this.alert = this.alert.bind(this);
  }

  componentWillMount() {
    this.props.fetchTags();
    console.log('Fetching Tags...')
  }


  titleChange(event) {
    this.setState({ title: event.target.value});
    if(this.state.title.length > 3 && this.state.tags.length && this.state.content != '') {
      this.setState({ display: 'display'})
    }
  }

  tagChange(event){
    const tagArray = event.target.value.split(',');
    this.setState({ tags: tagArray });
    if(this.state.title.length > 3 && this.state.tags.length && this.state.content != '') {
      this.setState({ display: 'display'})
    }
  }

  render() {
    let {value, format} = this.state;
    const { handleSubmit } = this.props;
    const blog = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content
    }

    return (
      <div className="editor">
        <div>
          <input
            type = 'text'
            value = {this.state.title}
            placeholder = 'Post Headline'
            onChange = {this.titleChange}
          />
        </div>

          <div className="area">
            <RichTextEditor
              value={value}
              onChange={this._onChange}
              className="react-rte-demo"
              placeholder="Tell a story"
              toolbarClassName="demo-toolbar"
              editorClassName="demo-editor"
              readOnly={this.state.readOnly}
            />
          </div>

          <div>
            <input
              type = 'text'
              value = {this.state.tags}
              placeholder = 'Tags (separate with comma)'
              onChange = {this.tagChange}
            />
          </div>
          <button onClick={this.handleButtonSave}>Validate</button>


          <div className="row" style={{display: 'none'}}>
            <textarea
              className="source"
              placeholder="Editor Source"
              value={value.toString(format)}
              onChange={this._onChangeSource}
            /> <br />
          </div>
          <div>
            <button
              className="BlogPostButton"
              className={this.state.display}
              onClick={this.alert}
            >
              Submit Post
            </button>
          </div>

      </div>
    );
  }

  _onChange(value: EditorValue) {
    this.setState({value});
  }

  handleButtonSave() {
    const content = this.state.value.toString('html');
    this.setState({ content: content })
    if(this.state.title.length > 3 && this.state.tags.length && this.state.content != '') {
      this.setState({ display: 'display'})
    }
  }

  alert(event) {
    const postDetails = {
            title: this.state.title,
            content: this.state.content
          },
          currentTags = this.props.tags,
          newTags = [];
    // check the current list of tags and see if any new tags Exists
    for (let btag of this.state.tags) {
       let match = false;
      for (let ctag of currentTags) {
        console.log(btag, ctag.title, match);
        if (btag.toLowerCase().trim() == ctag.title.toLowerCase()) {
          match = true;
          break;
        }
      }
      if (match === false) {
        newTags.push(btag.toLowerCase().trim());
      }
    }
    // submit new tags to db and get tag id's
    console.log('newTags', newTags)
    for (let tag of newTags) {
      if (!tag) {
        console.log('No New Tags')
      } else {
        let tagObject = { title: tag}
        console.log('tag: ', tagObject);
        this.props.createTags(tagObject);
      }
    }
    // get all used tags with their id's
    //

    // post blog content to db
    // get new blog id back
    //
    // create new blog-tag connection entries

  }
  // ===============================================
  // inherited functions
  _logState() {
    let editorState = this.state.value.getEditorState();
    let contentState = window.contentState = editorState.getCurrentContent().toJS();
    console.log(contentState);
  }

  _logStateRaw() {
    let editorState = this.state.value.getEditorState();
    let contentState = editorState.getCurrentContent();
    let rawContentState = window.rawContentState = convertToRaw(contentState);
    console.log(JSON.stringify(rawContentState));
  }

  _onChangeSource(event: Object) {
    let source = event.target.value;
    let oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format),
    });
  }

  _onChangeFormat(event: Object) {
    this.setState({format: event.target.value});
  }

  _onChangeReadOnly(event: Object) {
    this.setState({readOnly: event.target.checked});
  }
  // end inherited functions
  // ==============================================

}

function mapStateToProps (state) {
  return {
    tags: state.posts.tags
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ createPostContent, fetchTags, createTags }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogEditor);
