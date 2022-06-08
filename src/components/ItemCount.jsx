import React, { useState } from "react";
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
      <Card.Body>
        <ListGroup>
          <Card.Text>Stock: {stock}</Card.Text>
          <div class="row">
            <div class="col-4">
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
                Agregar
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
              setStock(10);
            }}
          >
            Reset
          </Button>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
