import React, { Component } from 'react';
class Blog extends Component {

  render() {
    const url = 'http://www.work-stress-solutions.com/images/blog.png';
    return(
      <div>
         Blog Page <br />
         <img src={url} /> <br />
         Utilize <a href='https://facebook.github.io/draft-js/'>Draft.js</a> for text editing in blog.
      </div>
    );
  }
}
export default Blog;
