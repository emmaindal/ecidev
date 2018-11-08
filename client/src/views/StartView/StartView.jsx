import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const StartView = ({ handleSayHello }) => {
  return (
    <div>
      <Navbar handleSayHello={handleSayHello} />
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
};

export default StartView;
