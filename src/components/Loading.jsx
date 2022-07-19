import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <>
      <Spinner animation="grow" />
      <h3>Cargando</h3>
    </>
  );
}

export default Loading;
