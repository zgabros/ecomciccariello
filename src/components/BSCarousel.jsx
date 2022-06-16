import React from "react";
import { Carousel } from "react-bootstrap";

function BSCarousel({ resultado }) {
  console.log(resultado);
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://placedog.net/640/130/r"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Productos destacados</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://placedog.net/641/130/r"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Ofertas destacadas</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BSCarousel;
