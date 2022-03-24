import React from "react";
import "./Details.css";

const Details = ({ product }) => {

    let quantity = 0;
    let price = 0;
    for(const pro of product){
        quantity = quantity + +pro.quantity;
        price = price + +pro.price;
    }
    const tax = 0.1 * price;
    const total = tax + price;


  return (
    <div className="info">
      <h1>Details</h1>
      <hr />
      <p>product quantity: {quantity}</p>
      <p>Price: {price}</p>
      <p>Txx: {tax}</p>
      <hr />
      <p>Total: {total}</p>
      <div className="text-center">
        <button className="btn btn-info btn-outline-success">See order</button>
      </div>
    </div>
  );
};

export default Details;
