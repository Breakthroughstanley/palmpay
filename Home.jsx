// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import home from "../../assets/Slogan.png";
import apple from "../../assets/apple2.png";
const main = () => {
  return (
    <div className="home">
      <img src={home} alt="" />
      <h3>
        Seamlessly send and receive money, effortlessly pay your bills, shop
        anywhere with ease, and take full
      </h3>
      <h4>control of your finances - all in PalmPay</h4>
      <div className="apple">
        <img src={apple} alt="" />
      </div>
    </div>
  );
};

export default main;
