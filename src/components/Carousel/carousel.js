import React from "react";

import { useEntries } from "../../hooks/useEntries";
import BlackLoader from "../../assets/images/black-loader.gif";

const Carousel = () => {
  const { data } = useEntries({ type: "carousel" });

  const setClass = (index) => {
    if (index === 0) return "carousel-item active";
    else return "carousel-item";
  };

  const carouselContent =
    data.length === 0 ? (
      <div className="text-center pt-5">
        <img src={BlackLoader} alt="Loading..." />
      </div>
    ) : (
      data.map((item, i) => {
        return (
          <div key={i} className={setClass(i)} data-bs-interval="8000">
            <img
              className="d-block w-100"
              data-slide-to={i}
              src={item.fields.carouselImage.fields.file.url}
              alt={item.fields.carouselImage.fields.title}
            />
          </div>
        );
      })
    );

  const prevButton = (
    <button
      className="carousel-control-prev"
      href="#carouselInterval"
      data-bs-slide="prev"
      type="button"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
  );

  const nextButton = (
    <button
      className="carousel-control-next"
      href="#carouselInterval"
      data-bs-slide="next"
      type="button"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  );

  return (
    <div
      id="carouselInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">{carouselContent}</div>
      {prevButton}
      {nextButton}
    </div>
  );
};

export default Carousel;
