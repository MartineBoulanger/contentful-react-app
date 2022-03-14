import React from "react";
import { Link } from "react-router-dom";
import { marked } from "marked";

import { useBlog } from "../../hooks/useBlog";
import BlackLoader from "../../assets/images/black-loader.gif";

const Blog = () => {
  const { data } = useBlog();

  const blogContent =
    data.length === 0 ? (
      <div className="text-center pt-5">
        <img src={BlackLoader} alt="Loading..." />
      </div>
    ) : (
      <div className="row">
        <div className="col-md-12">
          <img
            className="blog-image mb-4"
            src={data.fields.blogThumbnail.fields.file.url}
            alt={data.fields.blogThumbnail.fields.title}
          />
          <h2 className="text-center mb-4">{data.fields.titleBlog}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: marked(data.fields.blogDescription),
            }}
          />
          <button className="btn btn-primary button">
            <Link to="/blogs">Back</Link>
          </button>
        </div>
      </div>
    );

  return <div className="container p-4 blog">{blogContent}</div>;
};

export default Blog;
