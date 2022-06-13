import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  const { category } = useParams();

  const misDatos = [
    {
      id: 1,
      nombre: "Camisa",
      precio: "300",
      stock: 8,
      img: "https://placedog.net/640/470?random",
      categoria: "hombres",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat tellus ex, quis pellentesque mi euismod eget. Ut condimentum sapien euismod commodo venenatis.",
    },
    {
      id: 2,
      nombre: "Pantalon",
      precio: "200",
      stock: 10,
      img: "https://placedog.net/640/470?random",
      categoria: "hombres",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat tellus ex, quis pellentesque mi euismod eget. Ut condimentum sapien euismod commodo venenatis.",
    },
    {
      id: 3,
      nombre: "Zapatos",
      precio: "100",
      stock: 5,
      img: "https://placedog.net/640/470?random",
      categoria: "mujeres",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat tellus ex, quis pellentesque mi euismod eget. Ut condimentum sapien euismod commodo venenatis.",
    },
    {
      id: 4,
      nombre: "Bufanda",
      precio: "100",
      stock: 5,
      img: "https://placedog.net/640/470?random",
      categoria: "hombres",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat tellus ex, quis pellentesque mi euismod eget. Ut condimentum sapien euismod commodo venenatis.",
    },
    {
      id: 5,
      nombre: "Gorrito",
      precio: "100",
      stock: 5,
      img: "https://placedog.net/640/470?random",
      categoria: "niños",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat tellus ex, quis pellentesque mi euismod eget. Ut condimentum sapien euismod commodo venenatis.",
    },
    {
      id: 6,
      nombre: "Pollera",
      precio: "500",
      stock: 5,
      img: "https://placedog.net/640/470?random",
      categoria: "mujeres",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat tellus ex, quis pellentesque mi euismod eget. Ut condimentum sapien euismod commodo venenatis.",
    },
  ];

  useEffect(() => {
    fetch("../db.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let e = data.filter((x) => x.categoria === category);
        console.log(e);
        setResultado(e);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <Container className="saludos">
      <Row
        style={{
          padding: "20px",
        }}
      >
        <Col className="saludo">
          <h3>{"Estas en la categoria " + category}</h3>
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
      ></Row>
    </Container>
  );
}

export default ItemListContainer;
