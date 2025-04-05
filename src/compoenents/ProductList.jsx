import React, { useEffect } from "react";
import Navbar from "./Navbar";
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from "../features/ShopCart/productSlice";
import { addToCart } from "../features/ShopCart/cartSlice";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const { items: products, status } = useSelector((state) => state.product);
  const dispatch= useDispatch();
  useEffect(() => {
    if(status==='idle'){
      dispatch(fetchProducts())
    }
    /* const fetchProdcuts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      //  console.log('data',data);
      setProducts(data);
    };
    fetchProdcuts(); */
  }, [status]);

  if(status==='loading')return<p>Loading products...</p>
  if(status==='failed')return<p>Failed to load products.Please try again later</p>

  return (
    <>
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title.length>20?`${product.title.slice(0,20)}...`:product.title}</h2>
            <p>Price : ${product.price}</p>
            <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
