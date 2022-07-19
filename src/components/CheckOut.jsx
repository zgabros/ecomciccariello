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
import { Container } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./checkOut.css";

function CheckOut() {
  const { cart, getItemPrice, emptyCart } = useContext(MiContexto);

  const db = getFirestore();
  const orderColl = collection(db, "orders");

  const navigate = useNavigate();

  return (
    <Container className="contentContainer">
      <article className="checkout">
        <div style={{ color: "white", verticalAlign: "center" }}>
          <h3> Completa los siguientes datos</h3>
        </div>
        <Formik
          initialValues={{ name: "", email: "", cell: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(10, "Must be 10 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            cell: Yup.number()
              .typeError("That doesn't look like a phone number")
              .positive("A phone number can't start with a minus")
              .integer("A phone number can't include a decimal point")
              .min(10000, "Must be 8 characters or more")
              .required("A phone number is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              const order = {
                buyer: values,
                items: cart,
                total: getItemPrice(),
              };
              addDoc(orderColl, order).then(({ id }) => {
                alert("La compra fue registrada. El id de su compra es " + id);
              });
              setSubmitting(false);
              emptyCart();
              navigate("/");
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <label htmlFor="cell">Telefono</label>
            <Field name="cell" type="text" />
            <ErrorMessage name="cell" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </article>
    </Container>
  );
}

export default CheckOut;
