import React from "react";
import CartListItem from "./CartListItem";
import { Button, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { MiContexto } from "./context/CartContext";
import { Link } from "react-router-dom";

function CartList({ loading, error, cartObjects }) {
  const { emptyCart, getItemQty, getItemPrice } = useContext(MiContexto);

  return (
    <>
      <div>{loading && "Cargando"}</div>
      <div>{error && "error"}</div>
      <div>
        {cartObjects && (
          <>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr",
                  }}
                >
                  <div></div>
                  <div>
                    <p>Nombre</p>
                  </div>
                  <div>
                    <p>Precio</p>
                  </div>
                  <div>
                    <p>Cantidad</p>
                  </div>
                  <div>
                    <p>Borrar</p>
                  </div>
                </div>
              </ListGroup.Item>

              {cartObjects.map((item) => (
                <CartListItem key={item.id} item={item} />
              ))}
            </ListGroup>

            <ListGroup horizontal>
              <ListGroup.Item>
                <p>Cantidad</p>
                <p>{getItemQty()} </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Total</p>
                <p>{getItemPrice()} </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="danger" onClick={() => emptyCart()}>
                  Borrar
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="success" as={Link} to="/checkout">
                  Pagar
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </>
        )}
      </div>
    </>
  );
}

export default CartList;
