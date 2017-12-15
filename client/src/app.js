import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bulma/css/bulma.css";
import Page from "./components/Page";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Music from "./components/Music";
import BlogContainer from "./containers/BlogContainer";

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        component={() => (
          <Page>
            <Home />
          </Page>
        )}
      />
      <Route
        path="/aboutMe"
        component={() => (
          <Page>
            <AboutMe />
          </Page>
        )}
      />
      <Route
        path="/music"
        component={() => (
          <Page>
            <Music />
          </Page>
        )}
      />
      <Route
        path="/blog"
        component={() => (
          <Page>
            <BlogContainer />
          </Page>
        )}
      />
    </Switch>
  </Router>
);

export default App;
