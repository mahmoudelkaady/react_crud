import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllProducts from "./components/allproducts/AllProducts";
import AddProduct from "./components/Addproduct/AddProduct";
import ProDitails from "./components/proDitails/ProDitails";
import Error from "./components/Error/Error";
import Layout from "./components/Home/Layout";
import Home from "./components/content/Home";
import { useState } from "react";
import axios from "axios";

function App() {
  const [allproducts, setallproducts] = useState([]);
  // get all products and set it in the home page
  async function getAllProducts() {
    try {
      const { data } = await axios.get("http://localhost:3000/products");

      setallproducts(data);
    } catch (err) {
      // handling error when the API response has failed
      console.log("Error", err);
    }
  }

  const router = createBrowserRouter([
    {
      path: "",
      // render the home ocmponent as the parent cpmponent for all components
      element: <Layout />,
      children: [
        { path: "*", element: <Error /> },
        {
          path: "",
          element: (
            <Home getAllProducts={getAllProducts} allproducts={allproducts} />
          ),
        },
        {
          path: "allproducts",
          element: (
            <AllProducts
              getAllProducts={getAllProducts}
              allproducts={allproducts}
            />
          ),
        },
        { path: "allproducts/add", element: <AddProduct /> },
        { path: "allproducts/:proId", element: <ProDitails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
