import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import './index.css'; // or './App.css' if that's your file


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
