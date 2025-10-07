import React from "react";

export default function Card({ item }) {

  return (
    <div>
      <h2>{item.brand}</h2>
      <h4>{item.name}</h4>
      <hr />
    </div>
  );
}
