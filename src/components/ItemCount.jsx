import React, { useState, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

function ItemCount({ initial, stock, setStock, onAdd, onReset }) {
  const [pedido, setPedido] = useState(initial);

  const sumar = () => {
    setPedido(pedido + 1);
  };
  const restar = () => {
    setPedido(pedido - 1);
  };

  return (
    <Card>
      <Card.Header as="h5">Producto 1</Card.Header>
      <Card.Body>
        <Card.Text>Stock: {stock}</Card.Text>

        <ListGroup>
          <ListGroup.Item>
            <div class="row">
              <div class="col-4">
                <>
                  {pedido > initial ? (
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={restar}
                    >
                      -
                    </Button>
                  ) : (
                    <Button variant="primary" size="sm" disabled>
                      -
                    </Button>
                  )}
                </>
              </div>
              <div class="col-4">
                <Card.Text>
                  <h4>{pedido}</h4>
                </Card.Text>
              </div>
              <div class="col-4">
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
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div class="row">
              <div class="col-8">
                <>
                  {stock >= initial ? (
                    <Button
                      variant="primary"
                      onClick={() => {
                        onAdd(pedido);
                        setPedido(initial);
                        setStock(stock - pedido);
                      }}
                    >
                      Agregar al carrito
                    </Button>
                  ) : (
                    <Button variant="primary" disabled>
                      Sin suficiente stock
                    </Button>
                  )}
                </>
              </div>
              <div class="col-4">
                <Button
                  variant="secondary"
                  onClick={() => {
                    onReset();
                    setPedido(initial);
                    setStock(10);
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
