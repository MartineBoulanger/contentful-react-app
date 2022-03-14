import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contentfulClient } from "../util/client";

export const useBlog = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    try {
      if (slug) {
        contentfulClient
          .getEntries({ content_type: "blogs", "fields.slug": slug })
          .then((entries) => {
            setData(entries.items[0]);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [slug]);

  return {
    data,
  };
};
