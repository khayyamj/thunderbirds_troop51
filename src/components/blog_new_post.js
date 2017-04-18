import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createBlogPost } from './../actions/action_index.js';

class newBlogPost extends Component {
   static contextTypes = {
      router: PropTypes.object
   }


   onSubmit(props) {
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

               <div className='editor'>

               </div>
            </div>
            <button type='submit' className='nav-btn'>Submit</button>
         </form>
      )
   }


export default reduxForm({
   form: 'PostsNewForm',
   fields: ['title', 'categories', 'content'],

}, null, { createBlogPost })(newBlogPost)
