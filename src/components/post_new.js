/* @flow */
import React, {Component} from 'react';
import RichTextEditor, {createEmptyValue} from 'react-rte';
import {convertToRaw} from 'draft-js';
import autobind from 'class-autobind';
import type {EditorValue} from './RichTextEditor';
import { createPostContent } from './../actions/action_index';
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
    };
    this.handleButtonSave = this.handleButtonSave.bind(this);
  }

  render() {
    let {value, format} = this.state;
    const { handleSubmit } = this.props;

    return (
      <div className="editor">

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
          <button onClick={this.handleButtonSave}>Submit Changes</button>

          
          <div className="row" style={{display: 'none'}}>
            <textarea
              className="source"
              placeholder="Editor Source"
              value={value.toString(format)}
              onChange={this._onChangeSource}
            /> <br />
          </div>

      </div>
    );
  }

  handleButtonSave() {
    console.log('handleButtonSave --> Value: ', this.state.value.toString('html'));
    const content = this.state.value.toString('html');
    this.props.createPostContent(content);
  }

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

  _onChange(value: EditorValue) {
    this.setState({value});
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
}


const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ createPostContent }, dispatch);
};
export default connect(null, mapDispatchToProps)(BlogEditor);
