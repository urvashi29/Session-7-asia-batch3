import React, { Component } from "react";
import { connect } from "react-redux";
import { onGet } from "../../action";

class Contact extends Component {
  componentDidMount = () => {
    this.props.onGetUsers();
  };

  render() {
    console.log(this.props.users);
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUsers: () => dispatch(onGet()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
