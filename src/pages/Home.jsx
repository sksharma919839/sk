import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Scroll from "../components/Scroll/Scroll";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Sunil Sharma</title>
      </Helmet>
      <Header />
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Scroll />
    </>
  );
}

export default Home;
