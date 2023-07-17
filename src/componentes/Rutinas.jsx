import React from 'react';
import { ListGroup, Form,Container, Row, Col,  } from 'react-bootstrap';

export const Rutinas = () => {
    const rutinasGuardadas = JSON.parse(localStorage.getItem('rutinas') || '[]');

    return (
        <Container>
      <h1 className="my-4 text-warning">Rutinas Añadidas</h1>
      <Row>
        {rutinasGuardadas.map((rutina) => (
          <Col key={rutina.id} xs={12} sm={6} md={4} lg={3}>
            <Form className="border border-warning p-3 my-3">
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={rutina.nombre} readOnly />
              </Form.Group>
              <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" value={rutina.desc} readOnly />
              </Form.Group>
              {/* Agrega más campos para mostrar otros detalles de la rutina si es necesario */}
            </Form>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


