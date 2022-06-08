import React from "react";
import Item from "./Item";
import "./ItemList.css";

function ItemList({ loading, error, resultado }) {
  return (
    <>
      <div>{loading && "Cargando"}</div>
      <div>{error && "error"}</div>
      <article className="contenedorTarjetas">
        {resultado && resultado.map((item) => <Item item={item} />)}
      </article>
    </>
  );
}

export default ItemList;
