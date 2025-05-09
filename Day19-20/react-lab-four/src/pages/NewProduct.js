import React, { useState } from "react";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDeQ0UC4TH-VQn1gDp7HjwAPQvHiQvYHezg&usqp=CAU"
  );
  const [price, setPrice] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, desc, img, price };

    fetch("http://localhost:8000/Products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(e.target.reset());
  };
  return (
    <div className="constainer">
      <div className="add">
        <h2>Add new product</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Product name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>description</label>
          <input
            type="text"
            list="desc"
            required
            placeholder="Product description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <datalist id="desc">
            <option value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"></option>
          </datalist>
          <label>image</label>
          <textarea
            type="text"
            placeholder="Product image"
            onChange={(e) => setImg(e.target.value)}
          />
          <label>price</label>
          <input
            type="number"
            required
            placeholder="Product price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
