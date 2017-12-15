import React, { Component } from "react";

import BlogComment from "../components/BlogComment";

const comments = [
  {
    id: 1,
    author: "Anonymous",
    body: "This is a parent comment",
    created_on: 1513354065756,
    deleted: false,
    parent_comment: null,
    blog_post: 9
  },
  {
    id: 2,
    author: "Anonymous",
    body: "This is a child comment",
    created_on: 1513356701669,
    deleted: false,
    parent_comment: 1,
    blog_post: 9
  }
];

export default class BlogCommentContainer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      comments: []
    };
  }

  componentDidMount() {
    // fetch comments
    this.setState({
      comments
    });
  }

  toggleCollapse = () => {
    console.log("zoop");
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <BlogComment
        comments={this.state.comments}
        toggle={this.toggleCollapse}
        openState={this.state.isOpen}
      />
    );
  }
}
