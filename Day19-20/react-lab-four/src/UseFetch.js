import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
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
        .then((result) => {
          setData(result);
          setPending(false);
        })
        .catch((err) => {
          setPending(false);
          setErr(new Error('There is an error'));
        });
    },0);
  }, []);
  return { data, pending, err };
};

export default useFetch;
