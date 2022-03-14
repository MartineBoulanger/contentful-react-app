import React from "react";

import { useEntries } from "../../hooks/useEntries";
import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const Services = () => {
  const { data } = useEntries({ type: "services" });
  const { data: heading } = useEntry({ entryId: "4iNEHuPaxkM7ftuBtpHWaE" });

  const loader = (
    <div className="text-center pt-5">
      <img src={BlackLoader} alt="Loading..." />
    </div>
  );

  const headingContent =
    heading.length === 0 ? (
      loader
    ) : (
      <div className="text-center pt-2">
        <h2>{heading.fields.titleHeading}</h2>
        <p className="lead pb-4">{heading.fields.headingDescription}</p>
      </div>
    );

  const servicesContent =
    data.length === 0
      ? loader
      : data.map((item, i) => {
          return (
            <div className="col-md-4" key={i}>
              <div className="media service-wrap">
                <div>
                  <img
                    className="pr-3"
                    src={item.fields.serviceIcon.fields.file.url}
                    alt={item.fields.serviceIcon.fields.title}
                  />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">{item.fields.titleService}</h3>
                  <p>{item.fields.serviceDescription}</p>
                </div>
              </div>
            </div>
          );
        });

  return (
    <section id="services" className="p-4">
      <div className="container">
        {headingContent}
        <div className="row">{servicesContent}</div>
      </div>
    </section>
  );
};

export default Services;
