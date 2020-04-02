import React, { Component } from "react";
import { submitNewUser } from "./Components/Forms/submitValidate";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import NewUserForm from "./Components/Forms/NewUserForm";
import LoginForm from "./Components/Forms/LoginForm";
import MainBanner from "./Components/Banner/MainBanner";
import NavBar from "./Components/Nav/NavBar";

class App extends Component {
  state = {
    login: false
  };
  toggleForm = () => {
    this.setState(state => ({ login: !state.login }));
  };
  submit = values => {
    this.props.submitNewUser(values);
  };
  login = values => {
    alert(JSON.stringify(values, null, 2));
  };
  render() {
    const { login } = this.state;
    return (
      <Container className="my-3">
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md>
            <MainBanner
              view={login}
              toggle={this.toggleForm}
              title={login ? "Login" : "New User"}
              message="I think you know what to do!"
            />
          </Col>
          <Col xs md>
            {login ? (
              <LoginForm onSubmit={this.login} />
            ) : (
              <NewUserForm onSubmit={this.submit} />
            )}
          </Col>
        </Row>
      </Container>
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
