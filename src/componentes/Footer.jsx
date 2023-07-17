import React from "react";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom"

export const Footer =()=>{
    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <Container>
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex aling-item-center justify-content-center">
                            <img src='../logoFit.png' className="mx-2" height='100' />
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-center"><i>Fitness</i></li>
                            <li className="text-center"><i>Mundo Fitness 2023</i></li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2"> <i></i></li>
                            <li>
                                <i><Link className="nav-link"  to="/Home">Inicio</Link></i>
                                <i><Link className="nav-link" to="/RutinasEjercicios">Ejercicios</Link></i>
                                <i><Link className="nav-link" to="/PlanesEntrenamiento">Planes Entrenamiento</Link></i>
                                <i><Link className="nav-link" to="/MisRutinas">Mis Rutinas</Link></i>
                            </li>
                            
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-center"><i>Siguenos</i></li>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-facebook"/>
                                <i className="bi bi-instagram"/>
                                <i className="bi bi-twitter"/>
                                <i className="bi bi-youtube"/>
                            </li> 
                        </ul>
                        <div className="container">
                            <p className="text-center mb-0 mt-2"><i>Realizada por &copy;Exequiel Sepulveda</i></p>
                        </div>
                    </nav>
                </Container>
            </footer>
        </div>
    );
}