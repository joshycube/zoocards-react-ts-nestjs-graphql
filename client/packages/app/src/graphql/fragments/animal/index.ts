import gql from "graphql-tag";

export const ANIMAL_DETAILS_FRAGMENT = gql`
  fragment animalDetails on Animal {
    _id
    name
    classification
    nutrition
    extinct
  }
`;
