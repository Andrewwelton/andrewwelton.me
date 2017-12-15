import React from "react";
import PropTypes from "prop-types";

const BlogCommentCount = ({ commentCount }) =>
  commentCount > 0 ? (
    <div style={{ display: "inline-block", paddingLeft: "2rem" }}>
      <p>{commentCount} comments</p>
    </div>
  ) : (
    <div style={{ display: "inline-block", paddingLeft: "2rem" }}>
      <p>No comments yet.</p>
    </div>
  );

export default BlogCommentCount;
