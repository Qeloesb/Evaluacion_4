import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modals } from "./Modals";
import { Data } from "../Data";
import { BarraBusqueda } from "./BarraBusqueda";

export const RutinaGrid = () => {
    const [show, setShow] = useState(false);
    const [verData, setData] = useState();
    const [filtroData, setFiltroData] = useState(Data.cardData);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleModalOpen = (exercise) => {
        setData(exercise);
        handleShow();
    };

    const handleSearch = (busquedaTerm) => {
        if (busquedaTerm.trim() === '') {
            setFiltroData(Data.cardData);
        } else {
            const filtroEjercicos = Data.cardData.filter((exercise) => {
                const categoriaMatch = exercise.categoria.toLowerCase().includes(busquedaTerm.toLowerCase());
                const nombreMach = exercise.nombre.toLowerCase().includes(busquedaTerm.toLowerCase());
                return categoriaMatch || nombreMach;
            });
            setFiltroData(filtroEjercicos);
        }
    }
    const handleModalSubmit = () => {
        const rutinasGuardadas = JSON.parse(localStorage.getItem('rutinas') || '[]');
        const updatedRutinas = [...rutinasGuardadas, verData];
        localStorage.setItem('rutinas', JSON.stringify(updatedRutinas));
        handleClose();
    };

    return (
        <>
            <div className="bg-dark container" >
                <BarraBusqueda onSearch={(handleSearch)} />
                <div className="row justify-content-center align-item-center bg-dark">
                    {filtroData.map((item, index) => {
                        return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index} >
                                <div className="overflow-hidden h-100 shadow">
                                    <Card style={{ width: '18rem' }} >
                                        <Card.Img variant="top" src={item.imgSrc} />
                                        <Card.Body>
                                            <Card.Title>{item.nombre}</Card.Title>
                                            <Card.Text>
                                                {item.categoria}
                                            </Card.Text>
                                            <Button variant="warning" onClick={() => handleModalOpen(item)}>Descripcion</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {verData && (
                <Modals show={show} handleClose={handleClose} nombre={verData.nombre} desc={verData.desc} submit={handleModalSubmit} />
            )}

        </>
    );
}