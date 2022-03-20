import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles.scss";

const SimpleModal = ({
  show,
  handleClose,
  withHeader,
  title,
  withFooter,
  buttonText1,
  buttonText2,
  modalContent: ModalContent,
  element,
  isFavourite,
}) => (
  <Modal show={show} onHide={handleClose}>
    {withHeader && (
      <Modal.Header closeButton>
        <Modal.Title>{element.title ?? title}</Modal.Title>
      </Modal.Header>
    )}
    <Modal.Body>
      {ModalContent && (
        <ModalContent element={element} isFavourite={isFavourite} />
      )}
    </Modal.Body>
    {withFooter && (
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {buttonText1 ?? "Close"}
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {buttonText2 ?? "Save Changes"}
        </Button>
      </Modal.Footer>
    )}
  </Modal>
);

export default SimpleModal;
