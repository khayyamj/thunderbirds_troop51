/* @flow */
import React, {Component} from 'react';
import RichTextEditor, {createEmptyValue} from 'react-rte';
import {convertToRaw} from 'draft-js';
import autobind from 'class-autobind';
import type {EditorValue} from './RichTextEditor';
import { createPost, fetchTags, createTags, mergeBlogTags } from './../actions/action_index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IntlMixin, FormattedDate } from 'React-intl';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

let date = '';
let valid = false;

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
      content: false,
      display: 'noDisplay',
      authorid: 0,
      date_published: ''
    };
    this.handleButtonSave = this.handleButtonSave.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.tagChange = this.tagChange.bind(this);
    this.publishPost = this.publishPost.bind(this);
  }

  componentWillMount() {
    this.props.fetchTags();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    }
    if(mm<10) {
        mm='0'+mm;
    }
    date = dd+'/'+mm+'/'+yyyy;
    console.log('Date: ', date);
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



          <div className="row" style={{display: 'none'}}>
            <textarea
              className="source"
              placeholder="Editor Source"
              value={value.toString(format)}
              onChange={this._onChangeSource}
            /> <br />
          </div>
          <div>
            { this.state.content ?
              <Button positive onClick={this.publishPost}>
                Submit Post
              </Button> :
              <Button negative onClick={this.publishPost}>
                Validate Post
              </Button>
            }
          </div>

      </div>
    );
  }

  _onChange(value: EditorValue) {
    this.setState({value});
  }

  handleButtonSave() {

  }

  publishPost(event) {
    console.log('moved handleButtonSave valid: ', valid);
    console.log('date updated ->', this.state.date_published);
    const content = this.state.value.toString('html');
    this.setState({ content: content, date_published: date })
    if(this.state.title.length > 3 && this.state.tags.length && this.state.content != "<p><br></p>" && this.state.content) {
      valid = true;

      console.log('publishPost valid: ', valid)
      if (!valid) {
        return 'Complete Post Form'
      }
      const
        // postDetails = {
        //   title: this.state.title,
        //   content: this.state.content,
        //   date_published: this.state.date_published
        // },
        currentTags = this.props.tags,
        newTags = [],
        blogTags = {};

      let newBlogId = 0;

      // post blog content to db
      const blogObject = {
        title: this.state.title,
        content: this.state.content,
        date_published: this.state.date_published
      }
      this.props.createPost(blogObject)
      .then((response) => {

      // get new blog id back
        newBlogId = response.payload.data.blogid;
      })
      .then((response) => {

      // check the current list of tags and see if any new tags included
        for (let btag of this.state.tags) {
          let match = false;
          for (let ctag of currentTags) {
            if (btag.toLowerCase().trim() == ctag.tags.toLowerCase()) {
              match = true;
              break;
            }
          }
          if (match === false) {
            if (btag.trim()) {
              let title = btag.toLowerCase()
              let tagObject = {
                title: title
              }
              this.props.createTags(tagObject)
              .then((response) => {
              })
            }
          }
        }
      })
      .then((response) => {

      // get all used tags with their id's
        let index = this.props.tags.length + 1;
        for (let btag of this.state.tags) {
          let match = false;
          for (let ctag of this.props.tags) {
            if (btag.toLowerCase().trim() === ctag.tags) {
              match = true;
              blogTags[ctag.tags] = ctag.tagid
              break;
            }
          }
          if (match === false) {
            let title = btag.toLowerCase().trim()
            blogTags[title] = index++
          }
        }
      })
      .then((response) => {
      // create new blog-tag connection entries
        for (let connectTag in blogTags) {
          let mergeObject = {
            tagid: blogTags[connectTag],
            blogid: newBlogId
          }
          this.props.mergeBlogTags(mergeObject)
            .then((response) => {
              browserHistory.push('/posts')
              return response;
            })
        }
      })
    }
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
  return bindActionCreators({ createPost, fetchTags, createTags, mergeBlogTags }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogEditor);
