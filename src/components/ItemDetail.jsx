import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ loading, error, item }) {
  const { name, price, price_sign, description, category, api_featured_image } =
    item;

  const stock = 10;
  const [itemCar, setItemCar] = useState(0);

  const onAdd = (e) => {
    setItemCar(itemCar + e);
  };

  const onReset = (e) => {
    setItemCar(0);
  };

  return (
    <>
      <div>{loading && "Cargando"}</div>
      <div>{error && "error"}</div>
      {item && (
        <Container fluid className="contenido">
          <Row>
            <Col xs={12} md={6} lg={8}>
              <div className="image">
                <Image
                  src={api_featured_image}
                  fluid
                  style={{ height: "100vh" }}
                />
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="detalle">
              <Row className="titulo">
                <Col>
                  <p>{name}</p>
                  <h5>
                    Categoria:{" "}
                    <Link
                      to={`/categories/${category}`}
                      style={{ textDecoration: "none" }}
                    >
                      {category}
                    </Link>
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col className="descripcion">
                  <p>
                    {description}
                    {/* <Button
                      variant="link"
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                    >
                      {showMore ? "Show Less" : "Show More"}
                    </Button> */}
                  </p>
                  <h4>
                    Precio: {price_sign} {price}
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="compra">
                  <div>
                    {itemCar === 0 ? (
                      <ItemCount
                        initial={1}
                        onAdd={onAdd}
                        onReset={onReset}
                        stock={stock}
                      />
                    ) : (
                      <Button as={Link} to="/cart" variant="primary">
                        Finalizar compra
                      </Button>
                    )}
                  </div>
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
