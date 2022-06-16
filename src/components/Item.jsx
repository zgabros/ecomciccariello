import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  const {
    id,
    name,
    price,
    price_sign,
    description,
    category,
    api_featured_image,
  } = item;
  return (
    <Card className="ItemCard">
      <Card.Img src={api_featured_image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Precio: {price_sign} {price}
        </Card.Subtitle>
        <Card.Text>
          <p
            style={{
              overflow: "hidden",
              lineHeight: "1.5",
              maxHeight: "6rem",
              display: "-webkit-box",
              textOverflow: "ellipsis",
              WebkitLineClamp: "3",
            }}
          >
            {description}
          </p>
        </Card.Text>
        <ListGroup>
          <Button as={Link} to={`/product/${id}`}>
            Ver detalles
          </Button>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted">Categoría: {category}</Card.Footer>
    </Card>
  );
}

export default Item;
