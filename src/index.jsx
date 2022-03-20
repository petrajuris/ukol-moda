import React from "react";
import { render } from "react-dom";
import Accessories from "./components/Accessories";
import Dresses from "./components/Dresses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shoes from "./components/Shoes";
import "./style.css";

const App = () => (
  <div className="container">
    <Header title={"Móda"} />
    <Dresses />
    <Shoes />
    <Accessories />
    <Footer year={"2022"} author={"Petra Jurišová"} />
  </div>
);

render(<App />, document.querySelector("#app"));
