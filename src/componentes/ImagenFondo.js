import React from "react";
import { Container } from "react-bootstrap";


export const BackgroundImagePage = () => {
    return (
        <div>
            <Container conteiner class='responsive' justify='center' direccion='column' alignItem='center' >
                <Container item xs={3}>
                    <img
                        src="https://img.freepik.com/vector-gratis/elementos-vectoriales-etiquetas-vintage-fitness-gimnasio-gimnasio-fitness-deportivo-elemento-musculacion-mancuernas-barra-ilustracion-etiqueta_1284-47795.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </Container>
            </Container>
        </div>
    );
}