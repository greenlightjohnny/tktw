import Layout from "./components/layout";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routing from "./configs/routing";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>{Routing}</Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
