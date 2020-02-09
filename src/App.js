import React, { Component, Fragment } from "react";
import NewUserForm from "./Components/Forms/NewUserForm";
import { submitNewUser } from "./Components/Forms/submitValidate";
import { connect } from "react-redux";

class App extends Component {
  submit = values => {
    this.props.submitNewUser(values);
    console.log(this.props.users);
  };
  render() {
    return (
      <Fragment>
        <NewUserForm onSubmit={this.submit} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { submitNewUser }
)(App);
