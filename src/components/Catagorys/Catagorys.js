import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import SingleCatagory from "../SingleCatagory/SingleCatagory";
import { addToDb, getCart } from "../Utilies/Fakedb";
import "./Catagorys.css";

const Catagorys = () => {
  const [catagory, setCatagory] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCatagory(data.categories));
  }, []);

  useEffect(() => {
    const storeCart = getCart();
    const saveCart = [];

    for (const id in storeCart) {
      const alreadyAdded = catagory.find((p) => p.idCategory === id);
      if (alreadyAdded) {
        const quantity = storeCart[id];
        alreadyAdded.quantity = quantity;
        saveCart.push(alreadyAdded);
      }
    }
    setProduct(saveCart);
  }, [catagory]);

  const addToDetails = (products) => {
    let newCart = []
    const exist = product.find(p => p.idCategory === products.idCategory );
    if(!exist){
      products.quantity = 1;
      newCart = [...product, products]
    }
    else{
      const rest = product.filter(p=>p.idCategory !== products.idCategory)
      exist.quantity = exist.quantity + 1
      newCart = [...rest, exist]
    }
    setProduct(newCart);
    // console.log(allProduct);
    addToDb(products.idCategory);
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
