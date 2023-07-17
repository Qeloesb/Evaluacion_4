
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const Footer2 = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Link to='/' className="d-flex aling-item-center justify-content-center">
                            <img src='../logoFit.png' className="mx-2" height='50' />
                        </Link>
                    </Col >
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <i className="text-wrap text-light ">© Exequiel Sepulveda {new Date().getFullYear()} FitnessMot. Todos los derechos reservados.</i>
                    </Col>
                    <Col >
                        <p className="text-light text-center"><i>Siguenos</i></p>
                        <ul className="d-flex justify-content-between text-light list-unstyled">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <i className="bi bi-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <i className="bi bi-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <i className="bi bi-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <i className="bi bi-youtube" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};