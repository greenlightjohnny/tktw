import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Routing from "./configs/routing";

function App() {
  return (
    <>
      <Layout>{Routing} </Layout>
    </>
  );
}

export default App;
