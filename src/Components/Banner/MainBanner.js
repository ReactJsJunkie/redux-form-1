import React from "react";
import { Jumbotron, Button, ButtonGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const MainBanner = ({ title, message, toggleForm, view, toggleModal }) => {
  console.log(view);
  return (
    <Jumbotron>
      <h1 className="display-3">{title}</h1>
      <p className="lead">{message}</p>
      <hr />
      <ButtonGroup>
        <Button onClick={toggleModal} color="secondary">
          View Users <FontAwesomeIcon icon={faUser} />
        </Button>
        {view ? (
          <Button onClick={toggleForm} color="primary">
            Login <FontAwesomeIcon icon={faDoorOpen} />
          </Button>
        ) : (
          <Button onClick={toggleForm} color="info">
            New User <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faUser} />
          </Button>
        )}
      </ButtonGroup>
    </Jumbotron>
  );
};

export default MainBanner;
