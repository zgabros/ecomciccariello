import React from "react";
import "./ItemDetail.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemDetail({ loading, error, item }) {
  const { nombre, precio, img, categoria, descripcion } = item;

  return (
    <>
      <div>{loading && "Cargando"}</div>
      <div>{error && "error"}</div>
      {item && (
        <Container fluid className="contenido">
          <Row>
            <Col xs={12} md={6} lg={8}>
              <div className="image">
                <Image src={img} fluid />
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="descripcion">
              <Row>
                <Col>
                  <h2>{nombre}</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{descripcion}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Precio: ${precio}</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>
                    Categoria:
                    <Button
                      variant="link"
                      as={Link}
                      to={`/categories/${categoria}`}
                    >
                      {categoria}
                    </Button>
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default ItemDetail;
