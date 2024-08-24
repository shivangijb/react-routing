import axiosInstance from "../api/axios";
import { useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [listProducts, setListProducts] = useState([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const products = await axiosInstance({
        url: "https://fakestoreapi.com/products",
        method: "GET",
      });
      console.log("products", products)
      return products;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts().then((res) => setListProducts(res.data));
  }, []);

  return (
    <>
      <h3>Home</h3>
      <ul className="listOfItems">
        {listProducts.map((product) => {
          return (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              state={{ productName: product.title }}
            >
              <li className="item">{product.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
