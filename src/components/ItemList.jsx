import React from "react";
import Item from "./Item";
import "./ItemList.css";
import Loading from "./Loading";

function ItemList({ loading, error, resultado }) {
  return (
    <>
      <div>{loading && <Loading />}</div>
      <div>{error && "error"}</div>
      <article className="contenedorTarjetas">
        {resultado &&
          resultado.map((item) => <Item key={item.id} item={item} />)}
      </article>
    </>
  );
}

export default ItemList;
