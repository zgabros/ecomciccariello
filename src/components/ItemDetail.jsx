import { useState } from "react";
import { useContext } from "react";
import { Image, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MiContexto } from "./context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ loading, error, item }) {
  const [qty, setQty] = useState(1);

  const {
    id,
    name,
    price,
    price_sign,
    description,
    category,
    api_featured_image,
  } = item;
  const { isInCart, addItem } = useContext(MiContexto);
  const [finalizar, setFinalizar] = useState(false);

  const onAdd = () => {
    isInCart(id);
    addItem(item, qty);
    setFinalizar(true);
  };

  const stock = 10;
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
                  <p>{description}</p>
                  <h4>
                    Precio: {price_sign} {price}
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="compra">
                  <div>
                    {finalizar === false ? (
                      <ItemCount
                        stock={stock}
                        qty={qty}
                        setQty={setQty}
                        onAdd={onAdd}
                      />
                    ) : (
                      <Button
                        as={Link}
                        to="/cart"
                        variant="primary"
                        onClick={() => setFinalizar(false)}
                      >
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
