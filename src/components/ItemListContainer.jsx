import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { Container, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer({ greetings, item, setItem }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  const [stock, setStock] = useState(10);
  const misDatos = [
    {
      id: 1,
      nombre: "Camisa",
      precio: "300",
      stock: 8,
      img: "https://placedog.net/640/470?random",
    },
    {
      id: 2,
      nombre: "Jean",
      precio: "400",
      stock: 9,
      img: "https://placedog.net/640/471?random",
    },
    {
      id: 3,
      nombre: "Gorro",
      precio: "100",
      stock: 10,
      img: "https://placedog.net/640/472?random",
    },
    {
      id: 4,
      nombre: "Guantes",
      precio: "80",
      stock: 18,
      img: "https://placedog.net/640/473?random",
    },
    {
      id: 5,
      nombre: "Bufanda",
      precio: "100",
      stock: 16,
      img: "https://placedog.net/640/474?random",
    },
    {
      id: 6,
      nombre: "TShirt",
      precio: "200",
      stock: 7,
      img: "https://placedog.net/640/475?random",
    },
  ];

  useEffect(() => {
    const data = new Promise((res, rej) => {
      setTimeout(() => {
        res(misDatos);
      }, 3000);
    });
    data
      .then((res) => {
        setResultado(res);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onAdd = (e) => {
    setItem(item + e);
  };

  const onReset = (e) => {
    setItem(0);
  };

  return (
    <Container className="saludos">
      <Row
        style={{
          padding: "20px",
        }}
      >
        <Col className="saludo">
          <h3>{"Hola, bienvenido a " + greetings}</h3>
        </Col>
      </Row>
      <Row>
        <ItemList loading={loading} error={error} resultado={resultado} />
      </Row>
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          padding: "20px",
        }}
      >
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
