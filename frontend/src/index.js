import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import Router from "./components/Router";
import Home from "./components/screens/home/Home";
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
