import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { MiContexto } from "./context/CartContext";

function CartListItem({ item }) {
  const { deleteItem } = useContext(MiContexto);

  const { name, qty, price, id, image_link } = item;
  return (
    <ListGroup.Item>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr" }}
      >
        <div>
          <img
            src={image_link}
            style={{ width: "40px", height: "40px", objectFit: "scale-down" }}
          />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div>
          <p>{qty}</p>
        </div>
        <div>
          <Button onClick={() => deleteItem(id)} variant="danger">
            Borrar{" "}
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default CartListItem;
