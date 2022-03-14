import { useState, useEffect } from "react";
import { contentfulClient } from "../util/client";

// the entryId is the id that's behind the /entries/ in the url from the contentful web app
// trying to use the name and/or title from the entry won't work
// neither won't the id from the content_type

export const useEntry = ({ entryId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      contentfulClient.getEntry(entryId).then((entry) => {
        setData(entry);
      });
    } catch (error) {
      console.log(error);
    }
  }, [entryId]);

  return {
    data,
  };
};
