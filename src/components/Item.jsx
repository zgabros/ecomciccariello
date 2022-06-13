import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ item }) {
  const { nombre, img, precio, stock } = item;
  return (
    <Card className="ItemCard">
      <Card.Img src={img} />
      <Card.Title>{nombre}</Card.Title>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          Precio: {precio}
        </Card.Subtitle>
        <ListGroup>
          <Button as={Link} to={`/product/${nombre}`}>
            Ver detalles
          </Button>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted">Stock: {stock}</Card.Footer>
    </Card>
  );
}

export default Item;
