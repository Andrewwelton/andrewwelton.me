import React, { Component } from "react";

export default class AddCommentContainer extends Component {
  constructor() {
    super();

    this.state = {
      comment: ""
    };
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Comment:</label>
          <div className="control">
            <input
              onChange={this.handleChange}
              className="textarea"
              type="text"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button class="button is-link">Post</button>
          </div>
        </div>
      </form>
    );
  }
}
