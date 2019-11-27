import React, { Component } from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../../_actions/user.action";

class LoginPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = values => {
    // print the form values to the console
    console.log("vlll", values);
    this.props.history.push("/dashboard");
    // this.props.onLoginUser(values);
  };
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit}></LoginForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("STATTE", state);
  return {
    formVal: state.form
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: values => dispatch(loginUser(values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageContainer);
