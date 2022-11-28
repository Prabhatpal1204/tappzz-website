import React from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Announcement from "./components/Announcement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLoadingUserQuery } from "./services/appApi";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import OrderSuccess from "./components/Cart/OrderSuccess";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
const App = () => {
  const { data } = useLoadingUserQuery();
  console.log(data);
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout-success" element={<Checkout />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/confirm-order" element={<ConfirmOrder />} />
        <Route exact path="/success" element={<OrderSuccess />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/order-success" element={<OrderSuccess />} />
        <Route
          path="/product-querry-result/:keyword"
          element={<ProductList />}
        />
        <Route path="/category/:cate" element={<ProductList />} />
        <Route path="/product-querry-result/" element={<ProductList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
