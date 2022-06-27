import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import CartList from "./CartList";
import { MiContexto } from "./context/CartContext";
import "./cart.css";

function Cart() {
  const { cart, getItemQty } = useContext(MiContexto);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cartObjects, setCartObjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let compra = [];
    let miPromesa = new Promise((res, err) => {
      setTimeout(() => {
        res((compra = cart));
      }, 1000);
    });
    miPromesa
      .then((res) => {
        setCartObjects(compra);
      })
      .catch((err) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cart]);

  return (
    <Container className="contentContainer">
      <Row className="cart">
        {getItemQty() == 0 ? (
          <div style={{ color: "white", verticalAlign: "center" }}>
            <h3> Todavía no hay nada en tu carrito. :(</h3>
          </div>
        ) : (
          <CartList loading={loading} error={error} cartObjects={cartObjects} />
        )}
      </Row>
    </Container>
  );
}

export default Cart;
