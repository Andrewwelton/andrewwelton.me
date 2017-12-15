import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Page = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">Ayy buddy welcome</div>
      </div>
      <div className="navbar-item">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-item">
        <Link to="/aboutMe">About Me</Link>
      </div>
      <div className="navbar-item">
        <Link to="/music">Music</Link>
      </div>
      <div className="navbar-item">
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
    <div className="container" style={{ flex: 1 }}>
      <div>{children}</div>
    </div>
    <footer className="footer">
      <p>Get in touch with me here:</p>
      LINKS N SHEEIT
    </footer>
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
