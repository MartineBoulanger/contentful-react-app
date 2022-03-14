import React from "react";
import { Link } from "react-router-dom";

import { useEntries } from "../../hooks/useEntries";
import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const Blogs = () => {
  const { data } = useEntries({ type: "blogs" });
  const { data: heading } = useEntry({ entryId: "6JNsWhnf02UxtoJo5THRe9" });

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

  const blogsContent =
    data.length === 0
      ? loader
      : data.map((item, i) => {
          return (
            <div className="col-md-6 blog-content" key={i}>
              <img
                className="img-blog img-fluid"
                src={item.fields.blogThumbnail.fields.file.url}
                alt={item.fields.blogThumbnail.fields.title}
              />
              <h3>
                <Link to={`/blogs/${item.fields.slug}`}>
                  {item.fields.titleBlog}
                </Link>
              </h3>
              <p>{item.fields.blogShortIntro}</p>
              <button className="btn btn-primary">
                <Link className="blog-button" to={`/blogs/${item.fields.slug}`}>
                  Read more...
                </Link>
              </button>
            </div>
          );
        });

  return (
    <section id="blogs" className="p-4">
      <div className="container">
        {headingContent}
        <div className="row">{blogsContent}</div>
      </div>
    </section>
  );
};

export default Blogs;
