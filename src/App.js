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
import MyOrder from "./Pages/MyOrder";
import Admin from "./Pages/Admin";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
const App = () => {
  const { data } = useLoadingUserQuery();
  // const [admin, setAdmin] = React.useState(false);
  // console.log(data);
  // if (data?.user.role === "admin") {
  //   setAdmin(true);
  // }
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
        <Route exact path="/orders" element={<MyOrder />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route
          path="/product-querry-result/:keyword"
          element={<ProductList />}
        />
        <Route path="/category/:cate" element={<ProductList />} />
        <Route path="/product-querry-result/" element={<ProductList />} />
        {data?.success && data?.user.role === "admin" && (
          <Route path="/admin/*" element={<Admin />}>
            {/* <Route exact path="dashboard" element={<MainDash />} />
            <Route exact path="customers" element={<Customers />} />
            <Route exact path="products" element={<Products />} /> */}
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
