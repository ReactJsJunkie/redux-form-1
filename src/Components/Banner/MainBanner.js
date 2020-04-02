import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const MainBanner = ({ title, message, toggle, view }) => {
  console.log(view);
  return (
    <Jumbotron>
      <h1 className="display-3">{title}</h1>
      <p className="lead">{message}</p>
      <hr />
      {view ? (
        <Button onClick={toggle} color="primary">
          Login <FontAwesomeIcon icon={faDoorOpen} />
        </Button>
      ) : (
        <Button onClick={toggle} color="info">
          New User <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faUser} />
        </Button>
      )}
    </Jumbotron>
  );
};

export default MainBanner;
