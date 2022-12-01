import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router";
import animationData from "../lottie/not-found.json";
import "./NotFound.css";
const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const navigate = useNavigate();
  const homeRedirect = () => {
    navigate("/");
  };
  return (
    <div className="not-con">
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <button onClick={homeRedirect} className="btn">
        Home
      </button>
    </div>
  );
};

export default NotFound;
