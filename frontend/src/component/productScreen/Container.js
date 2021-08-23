import React from "react";
import Header from "../principal/Header";

export default function Container() {
  const colors = {
    blue: "#1DA1F2",
    yellow: "#FFAD1F",
    red: "#E0245E",
    purple: "#794BC4",
    orange: "#F45D22",
    green: "#17BF63",
  };
  console.log(colors);
  return (
    <div className="container1">
      <Header></Header>
      <div className="containerProducts">
        <div className="image">
          <img src="../../img/collection2.jpg" />
        </div>
        <div className="content">
          <div className="context">
            <i>Sale</i>
            <h2>Sueter Niken-Basurtico </h2>
            <span className="precioReal">$69,000</span>
            <span className="precioDescuento">$80,000</span>
            <form>
              {Object.values(colors).map((item) => (
                <input
                  type="radio"
                  name="color"
                  style={{ backgroundColor: { item } }}
                  defaultChecked
                />
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
