import React from "react";
import ReactDom from "react-dom/client";
import "./assets/styles/global.css";
import Home from "./components/screens/home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
