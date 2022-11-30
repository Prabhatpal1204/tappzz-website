import React from "react";
import MainDash from "../components/adminComponents/MainDash/MainDash";
import RightSide from "../components/adminComponents/RigtSide/RightSide";
import Sidebar from "../components/adminComponents/Sidebar";
import Customers from "../components/adminComponents/Customers/Customers";
import Products from "../components/adminComponents/Products/Products.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./Admin.css";
const Admin = () => {
  return (
    <div className="App-container">
      <div className="AppGlass">
        <Sidebar />
        {/* <MainDash />
        <Customers />
        <Products /> */}
        <Routes>
          <Route exact path="/" element={<MainDash />} />
          <Route exact path="/customers" element={<Customers />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
        <RightSide />
      </div>
    </div>
  );
};

export default Admin;
