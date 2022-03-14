import React, { Fragment } from "react";

import Carousel from "../../components/Carousel";
import Features from "../../components/Features";
import Portfolio from "../../components/Portfolio";
import Faqs from "../../components/Faqs";

const Home = () => {
  return (
    <Fragment>
      <Carousel />
      <Features />
      <Portfolio />
      <Faqs />
    </Fragment>
  );
};

export default Home;
