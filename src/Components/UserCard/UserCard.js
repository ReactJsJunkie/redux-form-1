import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText
} from "reactstrap";

const UserCard = ({ username, email, remove }) => {
  return (
    <Card>
      <CardHeader tag="h3">{username}</CardHeader>
      <CardBody>
        <CardText>{email}</CardText>
        <Button color="danger" remove={remove}>
          remove
        </Button>
      </CardBody>
      <CardFooter className="text-muted">
        User created: {new Date().toString()}
      </CardFooter>
    </Card>
  );
};

export default UserCard;
