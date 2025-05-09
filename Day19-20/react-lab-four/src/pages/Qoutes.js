import React, { useState } from "react";
// import useFetch from "../UseFetch";

const Qoutes = () => {

  const [err, setErr] = useState(null);
  const [text, setText] = useState([
    'Genius is one percent inspiration and ninety-nine percent perspiration."',
  ]);
  const [author, setAuthor] = useState(["Thomas Edison, type.fit"]);

  const changeQoute = async () => {
    const random = Math.floor(Math.random() * 15 + 1);
    await fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          setText(result[random].text);
          setAuthor(result[random].author);
        },
        (err) => {
          setErr(err);
        }
      );
  };

  return (
    <div className="container">
      <div className="qoute">
        <div className="box">
          <button onClick={changeQoute}>New Quote</button>
          <h2>{text}</h2>
          <p>{author}</p>
        </div>
      </div>
      {err && <h2>There is something wrong</h2>}
    </div>
  );
};

export default Qoutes;
