import React, { Component } from "react";
import PDF from "../utils/pdf";

class Post extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  sunmitPost = (e) => {
    if (!this.state.title || !this.state.content) {
      alert("All fields are required!");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        <PDF />
      </>
    );
  }
}

export default Post;
