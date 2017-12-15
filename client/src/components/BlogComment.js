import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import MessageOutlineIcon from "mdi-react/MessageOutlineIcon";
import { Collapse } from "react-collapse";

import AddCommentContainer from "../containers/AddCommentContainer";

const buildComments = comments => {
  const parentComments = comments.filter(x => x.parent_comment === null);
  const handledComments = parentComments.map(x => {
    const childrenComments = comments.filter(y => y.parent_comment === x.id);
    return (
      <div className="card" key={x.id}>
        <div className="card-content">
          <p>{x.author}</p>
          <p>{moment.unix(x.created_on).format("MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
        <div className="content">
          {x.body}
          {childrenComments.map(z => (
            <div style={{ paddingLeft: "4rem" }} key={z.id}>
              <div>
                <p>{z.author}</p>
                <p>
                  {moment.unix(z.created_on).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>
              <div className="content">{z.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  });
  return handledComments;
};

const BlogComment = ({ toggle, openState, comments }) => (
  <div>
    <footer className="card-footer">
      <div className="card-footer-item">
        <button className="button is-white" onClick={toggle}>
          <MessageOutlineIcon />
          <span style={{ paddingLeft: "1rem" }}>Comment</span>
        </button>
      </div>
    </footer>
    <Collapse isOpened={openState}>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        buildComments(comments)
      )}
    </Collapse>
    <AddCommentContainer />
  </div>
);

BlogComment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      created_on: PropTypes.number.isRequired,
      deleted: PropTypes.bool.isRequired,
      parent_comment: PropTypes.number,
      blog_post: PropTypes.number.isRequired
    })
  )
};

export default BlogComment;
