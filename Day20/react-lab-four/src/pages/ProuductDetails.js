import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";

const ProuductDetails = () => {
  const { data } = useFetch("http://localhost:8000/Products");
  const id = useParams().id;
  console.log(id);

  const product = data.filter((ele) => ele.id === id);
  console.log(product);
  return (
    <div className="container">
      <div className="details">
        <img src={product[0].img} alt="product" />
        <div className="info">
          <h2 style={{ textTransform: "capitalize" }}>{product[0].name}</h2>
          <p>{product[0].price}$</p>
        </div>
        <p className="desc">{product[0].desc}</p>
      </div>
    </div>
  );
};

export default ProuductDetails;
