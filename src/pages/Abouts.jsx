import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Scroll from "../components/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Abouts() {
  return (
    <>
      <Helmet>
        <title>About - Sunil Sharma</title>
      </Helmet>
      <Header />
      <Navbar />
      <About />
      <Footer />
      <Scroll />
    </>
  );
}

export default Abouts;
