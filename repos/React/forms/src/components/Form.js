import React, { Component } from "react";
import replacePathSepForGlob from "jest-util/build/replacePathSepForGlob";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      comment: "",
      comments: [],
      likes: 0,
      reply: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
    this.handleReply = this.handleReply.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(state => {
      let newComments = [...state.comments];
      newComments.push({ name: state.name, comment: state.comment });
      return { id: "", name: "", comment: "", comments: newComments };
    });
  }
  handleReply(e) {
    e.preventDefault();
    this.setState(state => {
      let reply = [...state.reply];
      reply.push({ name: state.name, comment: state.comment });
      return { id: "", name: "", comment: "", comments: reply };
    });
  }
  handleLikes(e) {
    e.preventDefault();
    let newLikes = this.state.likes + 1;
    this.setState({ likes: newLikes });
  }
  render() {
    let comments = this.state.comments.map((item, index) => {
      return (
        <li key={index}>
          {item.name}: {item.comment}
          <br />
          <button onClick={this.handleLikes} keyid={index}>
            Likes: {this.state.likes}
          </button>
          <button onClick={this.handleReply} keyid={index}>
            Reply:{" "}
          </button>
        </li>
      );
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Submit a Comment</label>
        <br />
        <input
          name="name"
          type="text"
          value={this.state.name}
          placeholder="Enter Your Name"
          onChange={this.handleChange}
        />
        <br />
        <label>Comment</label>
        <br />
        <textarea
          name="comment"
          type="text"
          value={this.state.comment}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <button>Submit</button>

        <h3>Comments</h3>
        <ul>{comments}</ul>
      </form>
    );
  }
}
