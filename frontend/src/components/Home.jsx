import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { items, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      <h2>New Arrivals</h2>
      <div className="products">
        {status ==="pending" ? (
          <h2>loading</h2>
        ) :
        status==="success"? (
          items?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add To Cart
              </button>
            </div>
          ))
        ):(
          <h2>unexpected error</h2>
        )}
      </div>
    </>
  )
};

export default Home;
