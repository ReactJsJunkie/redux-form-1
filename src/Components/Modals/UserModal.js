import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserModal = ({ modal, toggleModal, children }) => {
  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Users</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
