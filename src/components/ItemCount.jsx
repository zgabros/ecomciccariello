import React, { useState } from "react";
import { Button, ButtonGroup, Card, ListGroup } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "./ItemCount.css";

function ItemCount({ initial, stock, onAdd, onReset }) {
  const [pedido, setPedido] = useState(initial);

  const sumar = () => {
    setPedido(pedido + 1);
  };
  const restar = () => {
    setPedido(pedido - 1);
  };

  return (
    <Card>
      <Card.Body>
        <ListGroup>
          <Row>
            <Col style={{ textAlign: "left" }}>
              <>
                {pedido > initial ? (
                  <Button variant="outline-primary" size="sm" onClick={restar}>
                    -
                  </Button>
                ) : (
                  <Button variant="primary" size="sm" disabled>
                    -
                  </Button>
                )}
              </>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <Card.Text>
                <h4>{pedido}</h4>
              </Card.Text>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <>
                {pedido < stock ? (
                  <Button variant="outline-primary" size="sm" onClick={sumar}>
                    +
                  </Button>
                ) : (
                  <Button variant="primary" size="sm" disabled>
                    +
                  </Button>
                )}
              </>
            </Col>
          </Row>
          <Row>
            <ButtonGroup>
              <>
                {stock >= initial ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      onAdd(pedido);
                      setPedido(initial);
                    }}
                  >
                    Agregar items al carrito
                  </Button>
                ) : (
                  <Button variant="primary" disabled>
                    Sin suficiente stock
                  </Button>
                )}
              </>
              <Button
                variant="secondary"
                onClick={() => {
                  onReset();
                  setPedido(initial);
                }}
              >
                Reset
              </Button>
            </ButtonGroup>
          </Row>
        </ListGroup>
        <ListGroup>
          <Card.Text className="text-muted" style={{ textAlign: "center" }}>
            Stock: {stock}
          </Card.Text>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
