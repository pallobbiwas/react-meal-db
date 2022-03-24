import React from "react";
import "./SingleCatagory.css";

const SingleCatagory = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    props.catagory;
  const addToDetails = props.addToDetails;
  return (
    <div className="col-md-4 carts">
      <div className="cart">
        <div>
          <h3 className="text-end">{strCategory}</h3>
          <img className="img-fluid" src={strCategoryThumb} alt="" />
          <h4>price: 40</h4>
          <p>{strCategoryDescription.slice(0, 100)}</p>
        </div>
        <div className="buton d-flex">
          <button className="me-2 bttn">Details</button>
          <button
            onClick={() => addToDetails(props.catagory)}
            className=" bttn"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagory;
