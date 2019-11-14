import React, { Component } from "react";
import ReactDOM from "react-dom";
import CreatePost from './CreatePost';
import TopicBar from "./TopicBar";
import TopicPage from "./TopicPage";
import Header from "./Header";
import PostTopic from "./PostTopic";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TopicPage/>
        <PostTopic/>
      </div>
    );
  }
}

export default App;