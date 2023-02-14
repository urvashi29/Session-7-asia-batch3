import React, { Component } from "react";
import { TextField, Button, Container } from "@mui/material";
import { v4 as uuid } from "uuid";

class Form extends Component {
  state = {
    name: "",
    email: "",
  };

  handleChange = (e) => {
    // validation methods
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const unique_id = uuid().slice(0, 8);

    this.props.onAddItem({ ...this.state, id: unique_id });

    this.setState({
      name: "",
      email: "",
    });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: "20px" }}>
        <TextField
          id="name"
          label="Name"
          defaultValue=""
          value={this.state.name}
          onChange={this.handleChange}
        />

        <TextField
          id="email"
          label="Email"
          defaultValue=""
          value={this.state.email}
          onChange={this.handleChange}
        />

        <Button onClick={this.handleSubmit}>Submit</Button>
      </Container>
    );
  }
}

export default Form;
