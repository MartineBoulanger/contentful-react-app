import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import GET_LANDING_PAGE from "./landingPage.gql";

export const useLandingPage = () => {
  const [landingPage, setLandingPage] = useState([]);

  const { data, loading, error } = useQuery(GET_LANDING_PAGE, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  const hasData = data && data.landingPageCollection;

  const getData = useMemo(() => {
    return hasData ? hasData.items[0].sectionsCollection.items : null;
  }, [hasData]);

  const carouselData = useMemo(() => {
    return hasData
      ? hasData.items[0].sectionsCollection.items[0].imagesCollection.items
      : null;
  }, [hasData]);

  const featuresData = useMemo(() => {
    return hasData ? hasData.items[0].sectionsCollection.items[1] : null;
  }, [hasData]);

  const portfolioData = useMemo(() => {
    return hasData ? hasData.items[0].sectionsCollection.items[2] : null;
  }, [hasData]);

  const faqsData = useMemo(() => {
    return hasData ? hasData.items[0].sectionsCollection.items[3] : null;
  }, [hasData]);

  useEffect(() => {
    try {
      setLandingPage(getData);
    } catch {
      return;
    }
  }, [setLandingPage, getData]);

  return {
    landingPage,
    carouselData,
    featuresData,
    portfolioData,
    faqsData,
    loading,
    error,
  };
};
