import React from "react";

export function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <small>Created on: {props.createdAt}</small>
    </div>
  );
}

export default Post;
