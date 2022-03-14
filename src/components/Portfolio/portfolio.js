import React from "react";

import { useEntries } from "../../hooks/useEntries";
import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const Portfolio = () => {
  const { data } = useEntries({ type: "galleryImage" });
  const { data: heading } = useEntry({ entryId: "5vkbzES1OwF5wXiasg04Wd" });

  const loader = (
    <div className="text-center pt-5">
      <img src={BlackLoader} alt="Loading..." />
    </div>
  );

  const headingContent =
    heading.length === 0 ? (
      loader
    ) : (
      <div className="container text-center pt-5">
        <h2>{heading.fields.nameEntry}</h2>
        <p className="lead pb-3">{heading.fields.body}</p>
      </div>
    );

  const galleryContent =
    data.length === 0 ? (
      <div className="text-center pt-5">
        <img src={BlackLoader} alt="Loading..." />
      </div>
    ) : (
      data.map((item, i) => {
        return (
          <div className="grid-item" key={i}>
            <input type="checkbox" id={i} />
            <label htmlFor={i} className="lightbox">
              <img
                src={item.fields.galleryImage.fields.file.url}
                alt={item.fields.galleryImage.title}
              />
            </label>
            <label htmlFor={i}>
              <img
                src={item.fields.galleryImage.fields.file.url}
                alt={item.fields.galleryImage.title}
              />
            </label>
          </div>
        );
      })
    );

  return (
    <section id="portfolio">
      {headingContent}
      <div className="container">
        <div className="grid">{galleryContent}</div>
      </div>
    </section>
  );
};

export default Portfolio;
