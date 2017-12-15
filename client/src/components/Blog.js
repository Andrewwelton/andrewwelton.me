import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import MessageOutlineIcon from "mdi-react/MessageOutlineIcon";

import BlogCommentContainer from "../containers/BlogCommentContainer";
import BlogCommentCountContainer from "../containers/BlogCommentCountContainer";

const CenteredImage = ({ src, alt, title, height }) => (
  <p style={{ textAlign: "center" }}>
    <img alt={alt} title={title} src={src} />
  </p>
);

const createBlogPosts = blogPosts =>
  blogPosts.map(bp => (
    <div className="card" key={bp.id} style={{ marginBottom: "1rem" }}>
      <div className="card-content">
        <div className="media-content">
          <p className="title">{bp.title}</p>
          <div>
            <p className="subtitle" style={{ display: "inline-block" }}>
              {moment.unix(bp.created_on).format("MMMM DD, YYYY")}
            </p>
            <BlogCommentCountContainer />
          </div>
        </div>
        <div className="content">
          <ReactMarkdown
            source={bp.body}
            renderers={{ image: CenteredImage }}
          />
        </div>
      </div>
      <BlogCommentContainer />
    </div>
  ));

const Blog = ({ blogPosts }) => (
  <div className="blog-posts">{createBlogPosts(blogPosts)}</div>
);

Blog.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      created_on: PropTypes.number.isRequired,
      published: PropTypes.bool.isRequired
    })
  )
};

export default Blog;
