import React from "react";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useDispatch} from "react-redux";
// import  { productsFetch } from "../features/productsSlice";

const Home = () => {
  const {  items } = useSelector((state) => state.products);
  // const dispatch=useDispatch();
  // useEffect(() => {
  //  dispatch(productsFetch())
  // }, [])
  

  const handleAddToCart = (product) => {
    alert("added to Cart!")
    console.log(product)
  }; 

  return (
   <>
          <h2>New Arrivals</h2>
          <div className="products">
            {items &&
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
              ))}
          </div>
        </>
  );
};

export default Home;
