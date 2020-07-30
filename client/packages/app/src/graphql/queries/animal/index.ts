import gql from "graphql-tag";

import { ANIMAL_DETAILS_FRAGMENT } from "../../fragments/animal";

export const ANIMAL_QUERY = gql`
  query getAnimals {
    animals {
      ...animalDetails
    }
  }

  ${ANIMAL_DETAILS_FRAGMENT}
`;
