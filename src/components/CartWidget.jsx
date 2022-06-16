import React from "react";
import "./CartWidget.css";
import cartIcon from "../cart.svg";

function CartWidget({ itemCart }) {
  return (
    <>
      {
        <img
          src={cartIcon}
          width="30"
          height="30"
          className="d-inline-block align-top imagen"
          alt="Cart logo"
        />
      }
      <span style={{ color: "grey", fontWeight: "600", padding: "5px" }}>
        {itemCart}
      </span>
    </>
  );
}

export default CartWidget;
