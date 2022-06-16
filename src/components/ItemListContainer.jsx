import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import BSCarousel from "./BSCarousel";
import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResultado([]);
    //fetch("../db.json", {
    fetch("../db_makeup.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        !category
          ? setResultado(res)
          : setResultado(res.filter((x) => x.category === category));
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
    <Container>
      <BSCarousel resultado={resultado} />

      <Row
        style={{
          padding: "20px",
        }}
      ></Row>
      <Row>
        <ItemList loading={loading} error={error} resultado={resultado} />
      </Row>
    </Container>
  );
}

export default ItemListContainer;
