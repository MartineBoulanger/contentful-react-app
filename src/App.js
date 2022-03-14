import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./RootComponents/LandingPage/landingPage";

import Home from "./RootComponents/Home";
import About from "./RootComponents/About";
import Services from "./RootComponents/Services";
import Blogs from "./RootComponents/Blogs";
import Contact from "./RootComponents/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

// in react-router-dom v6+ the Route component has a prop called element instead of component.
// also, the Switch component has been changed into the Routes component.

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/landingpage" element={<LandingPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blogs/:slug" element={<Blog />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
