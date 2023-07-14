import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () =>{
    return(
        <Navbar bg='dark' data-bs-them='dark' collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home"><h1>Rutinas de Entrenamiento</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Seleccionar Rutinas</Nav.Link>
            <Nav.Link href="#pricing">Planes de Entrenamiento</Nav.Link>
            <Nav.Link href="#deets">Rutina Personalizada</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}