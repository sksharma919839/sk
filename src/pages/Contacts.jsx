import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Scroll from "../components/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contact - Sunil Sharma</title>
      </Helmet>
      <Header />
      <Navbar />
      <Contact />
      <Footer />
      <Scroll />
    </>
  );
}

export default Contacts;
