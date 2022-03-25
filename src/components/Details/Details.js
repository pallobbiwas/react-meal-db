import React from "react";
import "./Details.css";

const Details = ({ product }) => {
  console.log(product);
  let quantity = 0;

  for (const produc of product) {
    quantity = quantity + produc.quantity;
  }

  // console.log(quantity);

  return (
    <div className="info">
      <h1>Details</h1>
      <hr />
      <p>product quantity: {quantity}</p>
      {/* <p>Price: {price}</p>
      <p>Txx: {tax}</p>
      <hr />
      <p>Total: {total}</p> */}
      <div className="text-center">
        <button className="btn btn-info btn-outline-success">See order</button>
      </div>
    </div>
  );
};

export default Details;
