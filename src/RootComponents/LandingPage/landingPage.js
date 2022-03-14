import React, { Fragment } from "react";
import { marked } from "marked";

import { useLandingPage } from "../../hooks/LandingPage/useLandingPage";

import BlackLoader from "../../assets/images/black-loader.gif";

const LandingPage = () => {
  const {
    landingPage,
    carouselData,
    featuresData,
    portfolioData,
    faqsData,
    loading,
    error,
  } = useLandingPage();

  if (!landingPage) return null;

  if (loading) {
    return (
      <div className="text-center pt-5">
        <img src={BlackLoader} alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return <div className="text-center pt-5">{error}</div>;
  }

  const setClass = (index) => {
    if (index === 0) return "carousel-item active";
    else return "carousel-item";
  };

  const carouselContent = carouselData ? (
    <div
      id="carouselInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      
      
      <div className="carousel-inner">
        {carouselData.map((item, i) => (
          <div key={i} className={setClass(i)} data-bs-interval="8000">
            <img
              className="d-block w-100"
              data-slide-to={i}
              src={item.carouselImage.url}
              alt={item.carouselImage.title}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        href="#carouselInterval"
        data-bs-slide="prev"
        type="button"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        href="#carouselInterval"
        data-bs-slide="next"
        type="button"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  ) : null;

  const featuresContent = featuresData ? (
    <section id="features">
      <header className="container text-center pt-5">
        <h1>{featuresData.heading.nameEntry}</h1>
        <p className="lead pb-5">{featuresData.heading.body}</p>
      </header>
      <div className="container">
        <div className="row">
          {featuresData.bodyCollection.items.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="feature-wrap wrapping">
                <i className={item.featureIcon}></i>
                <h2>{item.nameEntry}</h2>
                <h3>{item.body}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;

  const portfolioContent = portfolioData ? (
    <section id="portfolio">
      <header className="container text-center pt-5">
        <h1>{portfolioData.heading.nameEntry}</h1>
        <p className="lead pb-3">{portfolioData.heading.body}</p>
      </header>
      <div className="container">
        <div className="grid">
          {portfolioData.body.galleryImageCollection.items.map((item, i) => (
            <div className="grid-item" key={i}>
              <input type="checkbox" id={i} />
              <label htmlFor={i} className="lightbox">
                <img
                  src={item.galleryImage.url}
                  alt={item.galleryImage.title}
                />
                <p className="text-center img-label">
                  {item.galleryImage.title}
                </p>
              </label>
              <label htmlFor={i}>
                <img
                  src={item.galleryImage.url}
                  alt={item.galleryImage.title}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;

  const showFirstFaq = (index) => {
    if (index === 0) return "accordion-collapse collapse show";
    else return "accordion-collapse collapse";
  };

  const faqsContent = faqsData ? (
    <section id="faqs">
      <header className="container text-center pt-5">
        <h1>{faqsData.heading.nameEntry}</h1>
        <p className="lead pb-5">{faqsData.heading.body}</p>
      </header>
      <div className="container mt-10">
        <div className="col-md-12 m-auto">
          <div className="accordion accordion-flush" id="accordion">
            {faqsData.bodyCollection.items.map((item, i) => (
              <div className="accordion-item faq-item" key={i}>
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button
                    className="accordion-button faq-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded="true"
                    aria-controls={`collapse${i}`}
                  >
                    {item.nameEntry}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className={showFirstFaq(i)}
                  aria-labelledby={`heading${i}`}
                  data-bs-parent="#accordion"
                >
                  <div
                    className="accordion-body"
                    dangerouslySetInnerHTML={{
                      __html: marked(item.body),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;

  return (
    <Fragment>
      {carouselContent}
      {featuresContent}
      {portfolioContent}
      {faqsContent}
    </Fragment>
  );
};

export default LandingPage;
