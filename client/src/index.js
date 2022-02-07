import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";
import Root from "./Root";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Root />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
