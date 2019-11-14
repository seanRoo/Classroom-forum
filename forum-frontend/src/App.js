import React, { Component } from "react";
import ReactDOM from "react-dom";
import CreatePost from './CreatePost';
import TopicHeader from "./TopicHeader";
import TopicPage from "./TopicPage";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TopicPage/>
      </div>
    );
  }
}

export default App;