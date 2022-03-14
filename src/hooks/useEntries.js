import { useState, useEffect } from "react";
import { contentfulClient } from "../util/client";

// the prop 'type' is to link to the correct content type
// this is de id from the content type in de contentful web app
// the id/name/title from an entry won't work here

export const useEntries = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      contentfulClient.getEntries({ content_type: type }).then((entries) => {
        setData(entries.items);
      });
    } catch (error) {
      console.log(error);
    }
  }, [type]);

  return {
    data,
  };
};
