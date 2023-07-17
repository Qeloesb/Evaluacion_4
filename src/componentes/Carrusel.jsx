import Carousel from 'react-bootstrap/Carousel';

export const Carrusel =()=>{
    return(
        <div class='responsive '>
             <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./piernas.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Rutinas de piernas</h3>
                  <p><i>Distitntas Rutinas de Piernas para Realizar</i></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./brazos.jpg"
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Rutinas de Brazos</h3>
                  <p><i>Distitntas Rutinas de Brazos para Realizar</i></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./espalda.jpg"
                  alt="Third slide"
                />
        
                <Carousel.Caption>
                  <h3>Rutinas de Espalda</h3>
                  <p><i>Distitntas Rutinas de Espalda para Realizar</i></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./pecho.jpeg"
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Rutinas de Pecho</h3>
                  <p><i>Distitntas Rutinas de Pecho para Realizar</i></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
           
    );
}


