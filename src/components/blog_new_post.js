import React, { Component, PropTypes } from 'react';
// import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createBlogPost } from '../actions';

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

      // -------------------------------------------------
      // TODO
      // check user permissions
      // if user is not a member display an alternate
      // screen with various menu options
      // include a statement that only members may
      // post on this page...
      // to become a member contact troop site admin
      // -------------------------------------------------


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
   function mapStateToProps(state) {
     return {
       login: state.login.login,
       user: state.profiles.user
     }
   };

export default reduxForm({
   form: 'PostsNewForm',
   fields: ['title', 'categories', 'content'],

}, null, { createBlogPost })(newBlogPost)
