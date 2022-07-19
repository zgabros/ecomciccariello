import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import "./ItemListContainer.css";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState({});

  const { id } = useParams();

  const colection = "items";
  const db = getFirestore();

  const docItem = doc(db, colection, id);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setItem([]);

    getDoc(docItem)
      .then((res) => {
        if (res.exists()) {
          setItem({ ...res.data(), id: res.id });
        } else {
          console.log("hubo un error");
        }
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
    <Container className="contentContainer">
      <Row>
        <ItemDetail loading={loading} error={error} item={item} />
      </Row>
    </Container>
  );
}

export default ItemDetailContainer;
