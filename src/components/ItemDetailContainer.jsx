import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import "./ItemListContainer.css";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);

  const [itemCar, setItemCar] = useState(0);
  const [stock, setStock] = useState(10);

  const { name } = useParams();

  useEffect(() => {
    fetch("../db.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let e = data.find((x) => x.nombre === name);
        console.log(e);
        setItem(e);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  const onAdd = (e) => {
    setItemCar(itemCar + e);
  };

  const onReset = (e) => {
    setItemCar(0);
  };

  return (
    <Container fluid>
      <Row>
        <ItemDetail loading={loading} error={error} item={item} />
      </Row>
      <Row>
        <Col sm={4}>
          <ItemCount
            initial={1}
            onAdd={onAdd}
            onReset={onReset}
            itemCar={itemCar}
            stock={stock}
            setStock={setStock}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetailContainer;
