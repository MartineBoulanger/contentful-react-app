import React from "react";
import { marked } from "marked";

import { useEntries } from "../../hooks/useEntries";
import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const Faqs = () => {
  const { data } = useEntries({ type: "faq" });
  const { data: heading } = useEntry({ entryId: "mPwrTR8b8posIR3rV2xHq" });

  const loader = (
    <div className="text-center pt-5">
      <img src={BlackLoader} alt="Loading..." />
    </div>
  );

  const showFirstFaq = (index) => {
    if (index === 0) return "accordion-collapse collapse show";
    else return "accordion-collapse collapse";
  };

  const headingContent =
    heading.length === 0 ? (
      loader
    ) : (
      <div className="container text-center pt-5">
        <h2>{heading.fields.nameEntry}</h2>
        <p className="lead pb-5">{heading.fields.body}</p>
      </div>
    );

  const faqsContent =
    data.length === 0
      ? loader
      : data.map((item, i) => {
          return (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded="true"
                  aria-controls={`collapse${i}`}
                >
                  {item.fields.nameEntry}
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
                    __html: marked(item.fields.body),
                  }}
                />
              </div>
            </div>
          );
        });

  return (
    <section id="faqs">
      {headingContent}
      <div className="container mt-10">
        <div className="col-md-12 m-auto">
          <div className="accordion accordion-flush" id="accordion">
            {faqsContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
