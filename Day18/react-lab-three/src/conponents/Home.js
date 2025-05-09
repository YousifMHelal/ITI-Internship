import useFetch from "../UseFetch";
import Product from "./Product";
import Loading from "./Loading";

const Home = () => {
  const { products, pending, err } = useFetch("http://localhost:8000/products");

  let arr = [];
  products.filter((product) => arr.push(product.product_category));
  arr = [...new Set(arr)];

  return (
    <div className="home">
      {pending && <Loading />}
      {products && (
        <div className="container">
          {arr.map((cat) => {
            return (
              <div key={cat}>
                <h2>{cat}</h2>
                <Product products={products} cat={cat} />
              </div>
            );
          })}
        </div>
      )}
      {err && <h2>There is something wrong</h2>}
    </div>
  );
};

export default Home;
