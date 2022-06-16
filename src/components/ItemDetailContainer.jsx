import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./ItemListContainer.css";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    setItem([]);
    //fetch("../db.json", {
    fetch("../db_makeup.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let e = data.find((x) => x.id == id);
        setItem(e);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <Container fluid>
      <Row>
        <ItemDetail loading={loading} error={error} item={item} />
      </Row>
    </Container>
  );
}

export default ItemDetailContainer;
