import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Modals = ({ show, handleClose, submit, nombre, desc, repeticiones, series, descanso }) => {

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {desc} <br />{repeticiones}<br /> {series} <br />{descanso}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="warning" onClick={submit}>Añadir Rutina</Button>
      </Modal.Footer>
    </Modal>
  );
}