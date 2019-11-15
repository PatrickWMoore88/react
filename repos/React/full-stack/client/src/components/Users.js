import React, { Component } from "react";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      // .then(users => this.setState({ users: users })) both are the same but the state key and value are the same name.
      .then(data => this.setState({ users: data }));
  }
  render() {
    return (
      <ul>
        {this.state.users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    );
  }
}

export default Users;
