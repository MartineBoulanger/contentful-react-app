import React from "react";

import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const Contact = () => {
  const { data: heading } = useEntry({ entryId: "SPblolWQkJfeJXjLqAhmk" });
  const { data: form } = useEntry({ entryId: "1eT4jSK9OWiE7gOAGrZgUd" });

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
        <p className="lead pb-2">{heading.fields.headingDescription}</p>
      </div>
    );

  const contactForm =
    form.length === 0 ? (
      loader
    ) : (
      <iframe
        title={form.fields.titleHeading}
        src={form.fields.contactFormUrl}
        width="640"
        height="600"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      />
    );

  return (
    <section id="contact" className="p-4">
      <div className="container">
        {headingContent}
        <div className="contact-form">{contactForm}</div>
      </div>
    </section>
  );
};

export default Contact;
