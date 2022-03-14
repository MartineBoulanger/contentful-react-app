import React from "react";

import { useEntries } from "../../hooks/useEntries";
import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const Features = () => {
  const { data } = useEntries({ type: "feature" });
  const { data: heading } = useEntry({ entryId: "1cH1L8yt4wv0eFaB1RD8cy" });

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
        <p className="lead pb-5">{heading.fields.body}</p>
      </div>
    );

  const featuresContent =
    data.length === 0
      ? loader
      : data.map((item, i) => {
          return (
            <div className="col-md-4" key={i}>
              <div className="feature-wrap">
                <i className={item.fields.featureIcon}></i>
                <h2>{item.fields.nameEntry}</h2>
                <h3>{item.fields.body}</h3>
              </div>
            </div>
          );
        });

  return (
    <section id="features">
      {headingContent}
      <div className="container">
        <div className="row">{featuresContent}</div>
      </div>
    </section>
  );
};

export default Features;
