import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MiContexto } from "./context/CartContext";
import {
  doc,
  addDoc,
  updateDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

function CheckOut() {
  const { cart, getItemPrice, emptyCart } = useContext(MiContexto);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");

  const db = getFirestore();
  const orderColl = collection(db, "orders");
  console.log(cart);

  //const orderDoc = doc(db, "items", cart[0].id);

  const navigate = useNavigate();

  function handleClick() {
    const order = {
      buyer: { name, email, cel },
      items: cart,
      total: getItemPrice(),
    };
    console.log(order);
    addDoc(orderColl, order).then(({ id }) => {
      console.log(id);
    });

    //updateDoc(orderDoc, { stock: cart[0].stock - cart[0].qty });

    emptyCart();
    navigate("/");
  }

  return (
    <article>
      <h3> Complete para finalizar su compra </h3>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        placeholder="Ingrese su nombre"
      ></input>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="Ingrese su email"
      ></input>
      <input
        onChange={(e) => {
          setCel(e.target.value);
        }}
        value={cel}
        placeholder="Ingrese su celular"
      ></input>
      <button onClick={handleClick}>Terminar Compra</button>
      <div>Datos cart</div>
    </article>
  );
}

export default CheckOut;
