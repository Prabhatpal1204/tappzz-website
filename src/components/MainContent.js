/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const MainContent = ({ productItem }) => {
  const dispatch = useDispatch();
  console.log("hry -" + productItem);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Add to cart successfully");
  };
  const listItems = productItem?.products.map((item) => (
    <div className="card" key={item._id}>
      <Link to={`/product/${item._id}`}>
        <div className="card_img">
          <img
            src={item.images[0].url}
            style={{ width: "250px", height: "300px" }}
          />
        </div>
      </Link>
      <div className="card_header">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>₹</span>
        </p>
        <div className="btn" onClick={() => handleAddToCart(item)}>
          Add to cart
        </div>
      </div>
    </div>
  ));
  return (
    <div className="main_content">
      {listItems}
      <Toaster />
    </div>
  );
};
export default MainContent;
