import React, { Fragment } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
import "./ConfirmOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  useLoadingUserQuery,
  useSlicePaymentMutation,
} from "../../services/appApi";
import { ColorRing } from "react-loader-spinner";
const ConfirmOrder = () => {
  const shipping = useSelector((state) => state.shipping);
  const { shipingInfo } = shipping;
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const [slicePayment] = useSlicePaymentMutation();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useLoadingUserQuery();
  console.log(shipingInfo[0]);
  const subtotal = cartTotalAmount;

  const shippingCharges = 100;

  const tax = 0.18 * subtotal;

  const totalPrice = subtotal + shippingCharges + tax;

  const address = `${shipingInfo[0].address}, ${shipingInfo[0].city}, ${shipingInfo[0].state}, ${shipingInfo[0].pinCode}, ${shipingInfo[0].country}`;

  const phoneNo = `${shipingInfo[0].phoneNo}`;
  console.log(cartItems);
  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    // navigate("/payment");
    slicePayment({
      cartItems,
    })
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("/api/v1/create-checkout-session", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   body: JSON.stringify({
    //     items: [
    //       { id: 1, quantity: 3 },
    //       { id: 2, quantity: 1 },
    //     ],
    //   }),
    // })
    //   .then((res) => {
    //     if (res.ok) return res.json();
    //     return res.json().then((json) => Promise.reject(json));
    //   })
    //   .then(({ url }) => {
    //     window.location = url;
    //   })
    //   .catch((e) => {
    //     console.error(e.error);
    //   });
  };

  return (
    <Fragment>
      <CheckoutSteps activeStep={1} />
      {isLoading && <ColorRing />}
      {isSuccess && (
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <Typography>Shipping Info</Typography>
              <div className="confirmshippingAreaBox">
                <div>
                  <p>Name:</p>
                  {isLoading ? (
                    <span>Sheessh</span>
                  ) : (
                    <span>{data.user.name}</span>
                  )}
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{phoneNo}</span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <Typography>Your Cart Items:</Typography>
              <div className="confirmCartItemsContainer">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.images[0].url} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.cartQuantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.cartQuantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="orderSummary">
              <Typography>Order Summery</Typography>
              <div>
                <div>
                  <p>Subtotal:</p>
                  <span>₹{subtotal}</span>
                </div>
                <div>
                  <p>Shipping Charges:</p>
                  <span>₹{shippingCharges}</span>
                </div>
                <div>
                  <p>GST:</p>
                  <span>₹{tax}</span>
                </div>
              </div>

              <div className="orderSummaryTotal">
                <p>
                  <b>Total:</b>
                </p>
                <span>₹{totalPrice}</span>
              </div>

              <button onClick={proceedToPayment}>Proceed To Payment</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ConfirmOrder;
