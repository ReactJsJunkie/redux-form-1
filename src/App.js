import React, { Component } from "react";
import {
  submitNewUser,
  toggleUserModal
} from "./Components/Forms/submitValidate";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import NewUserForm from "./Components/Forms/NewUserForm";
import LoginForm from "./Components/Forms/LoginForm";
import MainBanner from "./Components/Banner/MainBanner";
import NavBar from "./Components/Nav/NavBar";
import UserModal from "./Components/Modals/UserModal";
import UserCard from "./Components/UserCard/UserCard";

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
  openModal = () => {
    this.props.toggleUserModal();
    console.log(this.props.modal);
  };
  render() {
    const { login } = this.state;
    const { modal, users } = this.props;
    console.log(users);
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
              toggleModal={this.openModal}
              toggleForm={this.toggleForm}
              title={login ? "New User" : "Login"}
              message="I think you know what to do!"
            />
          </Col>
          <Col xs md>
            <Card>
              <CardBody>
                {login ? (
                  <NewUserForm onSubmit={this.submit} />
                ) : (
                  <LoginForm onSubmit={this.login} />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <UserModal modal={modal} toggleModal={this.openModal}>
          {users.map(user => (
            <UserCard username={user.username} email={user.email} />
          ))}
        </UserModal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  modal: state.users.modal
});

export default connect(
  mapStateToProps,
  { submitNewUser, toggleUserModal }
)(App);
