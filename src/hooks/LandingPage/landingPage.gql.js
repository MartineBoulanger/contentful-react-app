import { gql } from "@apollo/client";

const GET_LANDING_PAGE = gql`
  query getLandingPage {
    landingPageCollection(limit: 1) {
      items {
        nameEntry
        sectionsCollection(limit: 4) {
          items {
            __typename
            ... on ImageCarousel {
              imagesCollection {
                items {
                  carouselImage {
                    title
                    url
                  }
                }
              }
            }
            ... on Features {
              heading {
                nameEntry
                body
              }
              bodyCollection {
                items {
                  nameEntry
                  featureIcon
                  body
                }
              }
            }
            ... on Portfolio {
              heading {
                nameEntry
                body
              }
              body {
                galleryImageCollection {
                  items {
                    galleryImage {
                      title
                      url
                    }
                  }
                }
              }
            }
            ... on Faqs {
              heading {
                nameEntry
                body
              }
              bodyCollection {
                items {
                  nameEntry
                  body
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_LANDING_PAGE;
