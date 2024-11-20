import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Projectpage from "../components/Projects/Projectpage";
import Footer from "../components/Footer/Footer";
import Scroll from "../components/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Project() {
  return (
    <>
      <Helmet>
        <title>Projects - Sunil Sharma</title>
      </Helmet>
      <Header />
      <Navbar />
      <Projectpage />
      <Footer />
      <Scroll />
    </>
  );
}

export default Project;
