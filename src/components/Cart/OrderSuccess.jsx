import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { clearCart } from "../../features/cartSlice";
import { clearShip } from "../../features/shippingSlice";
import { useDispatch } from "react-redux";
const OrderSuccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
    dispatch(clearShip());
  }, [dispatch]);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
