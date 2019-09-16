import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    posts: []
  };

  getPosts = () => {
    fetch("http://localhost:8080/feed/posts")
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        const posts = JSON.stringify(resData.posts[0].title);
        this.setState({
          posts: posts
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <button onClick={this.getPosts}>get posts</button>
        <button>add post</button>
        <div>{this.state.posts}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
