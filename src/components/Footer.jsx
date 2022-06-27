import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr 1fr",
        padding: "10px",
        height: "45px",
        width: "100%",
        gap: "10px",
      }}
    >
      <div style={{ backgroundColor: "white" }}> La tienda </div>
      <div style={{ backgroundColor: "white" }}> Montevideo, 2022 </div>
      <div style={{ backgroundColor: "white" }}> Contacto </div>
    </div>
  );
}

export default Footer;
