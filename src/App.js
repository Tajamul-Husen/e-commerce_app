import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
