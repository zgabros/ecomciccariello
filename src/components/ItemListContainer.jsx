import React, { useState } from "react";
import "./ItemListContainer.css";
import { Container, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemListContainer({ greetings, item, setItem }) {
  const [stock, setStock] = useState(10);

  const onAdd = (e) => {
    setItem(item + e);
  };

  const onReset = (e) => {
    setItem(0);
  };

  return (
    <Container className="saludos">
      <Row>
        <Col className="saludo">
          <p>{"Hola, este es un saludo, " + greetings}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ItemCount
            initial={1}
            onAdd={onAdd}
            onReset={onReset}
            item={item}
            stock={stock}
            setStock={setStock}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
