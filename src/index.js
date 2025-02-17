import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/NavBar";
import Form from "./components/Form";
import About from "./components/About";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar title="TextUtils" aboutText="About TextUtils" />
    {/* <Form heading="Enter a text below" /> */}
    <About />
  </React.StrictMode>
);

reportWebVitals();
