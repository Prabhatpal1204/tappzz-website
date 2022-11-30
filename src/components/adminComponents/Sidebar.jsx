import React, { useState } from "react";
import "./Sidebar.css";
import Gif from "../imgs/shopping-cart-unscreen.gif";
import Logo from "../imgs/tappzLogo2.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const onClickRouting = (index) => {
    setSelected(index);
    if (selected === 0) {
      navigate("/admin");
    }
    if (selected === 1) {
      navigate("/admin/customers");
    }
    if (selected === 2) {
      navigate("/admin/products");
    }
  };

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Gif} alt="logo" className="logo-gif" />
          <img src={Logo} alt="logo" className="logo-image" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => onClickRouting(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
