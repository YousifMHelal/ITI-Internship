import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../UseFetch";
import Error from "./404/Error";

const Products = () => {
  const { data, pending, err } = useFetch("http://localhost:8000/Products");

  const [search, setSearch] = useState("");

  const product = data.filter((item) => {
    return search
      ? item.name.toLowerCase().includes(search.toLowerCase())
      : item;
  });

  const handelDel = (id) => {
    window.location.reload()
    fetch(`http://localhost:8000/Products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="container"
    >
      <input
        list="searchBar"
        className="search"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <datalist id="searchBar">
        {product.map((ele) => {
          return <option key={ele.id} value={ele.name.toUpperCase()}></option>;
        })}
      </datalist>
      {pending && <h2>Loading ....</h2>}
      <section className="products">
        {data &&
          product.map((ele) => {
            return (
              <Link className="card" key={ele.id}>
                <img src={ele.img} alt="product" />
                <h2>{ele.name}</h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <p>{ele.price}$</p>
                  <button className="del" onClick={(e) => handelDel(ele.id)}>
                    DEL
                  </button>
                </div>
              </Link>
            );
          })}
      </section>
      {err && <Error err="can't get the products" />}
    </div>
  );
};

export default Products;
