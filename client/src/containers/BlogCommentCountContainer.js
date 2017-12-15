import React, { Component } from "react";

import BlogCommentCount from "../components/BlogCommentCount";

export default class BlogCommentCountContainer extends Component {
  constructor() {
    super();
    this.state = {
      blogCommentCount: 0
    };
  }

  componentDidMount() {
    /*fetch(`/api/blog-comments/${this.props.id}/count`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ blogCommentCount: response.count })
      });*/
  }

  render() {
    return <BlogCommentCount commentCount={this.state.blogCommentCount} />;
  }
}
