import React, { useState } from 'react';
import { Modals } from "./Modals";
import { ListGroup, Form, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ModalRutina } from './ModalRutina';

export const Rutinas = () => {
  const rutinasGuardadas = JSON.parse(localStorage.getItem('rutinas') || '[]');
  const [modalVisible, setModalVisible] = useState(false);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState();

  const handleEliminarRutina = (id) => {
    const updatedRutinas = rutinasGuardadas.filter((rutina) => rutina.id !== id);
    localStorage.setItem('rutinas', JSON.stringify(updatedRutinas));
    window.location.reload();
  };

  const handleMostrarModal = (rutina) => {
    setRutinaSeleccionada(rutina);
    setModalVisible(true);
  };

  const handleCerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <h1 className="my-4 text-warning text-center">Rutinas Añadidas</h1>
      <Row>
        {rutinasGuardadas.map((rutina) => (
          <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4 responsive" key={rutina.id} >
            <div className="overflow-hidden h-100 shadow">
              <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={rutina.imgSrc} />
                <Card.Body>
                  <Card.Title>{rutina.nombre}</Card.Title>
                  <Button variant="danger me-md-2" onClick={() => handleEliminarRutina(rutina.id)}>Eliminar</Button>
                  <Button variant="warning" onClick={() => handleMostrarModal(rutina)}>Descripcion</Button>
                </Card.Body>
              </Card>
            </div>

          </div>
        ))}
      </Row>
      {rutinaSeleccionada && (
        <ModalRutina
          show={modalVisible}
          handleClose={handleCerrarModal}
          nombre={rutinaSeleccionada.nombre}
          repeticiones={rutinaSeleccionada.repeticiones}
          series={rutinaSeleccionada.series}
          descanso={rutinaSeleccionada.descanso}

        />
      )}

    </Container>
  );
};


