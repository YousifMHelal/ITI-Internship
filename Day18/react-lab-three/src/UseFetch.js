import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            setPending(false);
          }
        })
        .then((data) => {
          setProducts(data);
          setPending(false);
          setErr(null);
        })
        .catch((err) => {
          setErr(err);
        });
    }, 2000);
  }, []);
  return { products, pending, err };
};

export default useFetch;
