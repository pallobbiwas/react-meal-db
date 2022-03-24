import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import SingleCatagory from "../SingleCatagory/SingleCatagory";
import "./Catagorys.css";

const Catagorys = () => {
  const [catagory, setCatagory] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCatagory(data.categories));
  }, []);
  const addToDetails = (props) => {
    setProduct(props);
  };
// console.log(product);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="catagories row">
            {catagory.map((cat) => (
              <SingleCatagory
                key={cat.idCategory}
                catagory={cat}
                addToDetails={addToDetails}
              ></SingleCatagory>
            ))}
          </div>
        </div>
        <div className="details col-md-3">
          <Details product={product}></Details>
        </div>
      </div>
    </div>
  );
};

export default Catagorys;
