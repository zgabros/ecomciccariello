import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
          <Button>Ver detalles</Button>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted">Stock: {stock}</Card.Footer>
    </Card>
  );
}

export default Item;
