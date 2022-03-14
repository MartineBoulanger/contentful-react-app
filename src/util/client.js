// You can use the contentful module to get the content from a specific space on the contentful app
// But you also can use graphql and @apollo/client if you want to use graphql
// or to get the REST api, you can use the cdn link <- only when you don't use the contentful module

import { createClient } from "contentful";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const spaceId = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export const contentfulClient = createClient({
  space: `${spaceId}`,
  accessToken: `${accessToken}`,
});

export const apolloClient = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/?access_token=${accessToken}`,
  // uri: "http://localhost:3000",
  cache: new InMemoryCache(),
});
