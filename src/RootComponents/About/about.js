import React, { Fragment } from "react";
import { marked } from "marked";

import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const About = () => {
  const { data } = useEntry({ entryId: "4DN0z0cN2vDZRlmHAdeFA4" });

  const aboutContent =
    data.length === 0 ? (
      <div className="text-center pt-5">
        <img src={BlackLoader} alt="Loading..." />
      </div>
    ) : (
      <Fragment>
        <h2 className="text-center">{data.fields.titleAbout}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(data.fields.aboutDescription),
          }}
        />
      </Fragment>
    );

  return <div className="container p-4">{aboutContent}</div>;
};

export default About;
