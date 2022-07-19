import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  const { category } = useParams();

  const coleccion = "items";
  const db = getFirestore();

  const collectionProd = collection(db, coleccion);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResultado([]);

    getDocs(collectionProd)
      .then((res) => {
        let data = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        !category
          ? setResultado(data)
          : setResultado(data.filter((x) => x.category === category));
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
    <Container className="contentContainer">
      <Row>
        <ItemList loading={loading} error={error} resultado={resultado} />
      </Row>
    </Container>
  );
}

export default ItemListContainer;
