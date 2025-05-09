import useFetch from "../UseFetch";
import Product from "../components/Product";
import Error from "./404/Error";

const Home = () => {
  const { data, pending, err } = useFetch("http://localhost:8000/Data");

  let arr = [];
  data.filter((product) => arr.push(product.product_category));
  arr = [...new Set(arr)];
  return (
    <div className="home">
      <div className="container">
        {pending && <h2>Loading ....</h2>}
        {data &&
          arr.map((cat) => {
            return (
              <div key={cat}>
                <h2>{cat}</h2>
                <Product products={data} cat={cat} />
              </div>
            );
          })}
      </div>
      {err && (
        <Error err="There is something wrong will trying to fetch the data" />
      )}
    </div>
  );
};

export default Home;
