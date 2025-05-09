import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./pages/Root";
import Products from "./pages/Products";
import Help from "./pages/Help";
import Qoutes from "./pages/Qoutes";
import ProuductDetails from "./pages/ProuductDetails";
import Contact from "./pages/Contact";
import Fqa from "./pages/Fqa";
import Home from "./pages/Home";
import NotFound from "./pages/404/NotFound";
// import Error from "./pages/404/Error"; 
import NewProduct from "./pages/NewProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />}>
        <Route path="products/:id" element={<ProuductDetails />} />
      </Route>
      <Route path="help" element={<Help />}>
        <Route path="contact" element={<Contact />} />
        <Route path="fqa" element={<Fqa />} />
      </Route>
      <Route path="Qoutes" element={<Qoutes />} />
      <Route path="newproduct" element={<NewProduct />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Root/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProuductDetails />} />
          <Route path="/help" element={<Help />} />
          <Route path="/help/contact" element={<Contact />} />
          <Route path="/help/fqa" element={<Fqa />} />
          <Route path="/qoutes" element={<Qoutes />} />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
