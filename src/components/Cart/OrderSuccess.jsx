import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { clearCart } from "../../features/cartSlice";
import { clearShip } from "../../features/shippingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../services/appApi";

const OrderSuccess = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  // const dispatch = useDispatch();
  const [createOrder] = useCreateOrderMutation();
  const { cartItems } = useSelector((state) => state.cart);
  const cart = [];
  for (let index = 0; index < cartItems.length; index++) {
    cart[index] = {
      product: cartItems[index]._id,
      name: cartItems[index].name,
      quantity: cartItems[index].cartQuantity,
      price: cartItems[index].price,
      image: cartItems[index].images[0].url,
    };
  }
  console.log(cart);
  const shipping = useSelector((state) => state.shipping);
  const { shipingInfo } = shipping;
  const shippingInfo = shipingInfo[0];
  const order = {
    shippingInfo,
    orderItems: cart,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    createOrder(order).then((res) => {
      dispatch(clearCart());
      dispatch(clearShip());
    });
  }, [dispatch, createOrder]);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
