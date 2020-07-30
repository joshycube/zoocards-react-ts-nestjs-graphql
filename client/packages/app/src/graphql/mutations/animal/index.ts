import gql from "graphql-tag";

import { ANIMAL_DETAILS_FRAGMENT } from "../../fragments/animal";

export const ANIMAL_UPDATE_MUTATION = gql`
  mutation updateAnimal($updateAnimalInput: UpdateAnimalInput!) {
    updateAnimal(updateAnimalInput: $updateAnimalInput) {
      ...animalDetails
    }
  }

  ${ANIMAL_DETAILS_FRAGMENT}
`;

export const ANIMAL_CREATE_MUTATION = gql`
  mutation createAnimal($createAnimalInput: CreateAnimalInput!) {
    createAnimal(createAnimalInput: $createAnimalInput) {
      ...animalDetails
    }
  }

  ${ANIMAL_DETAILS_FRAGMENT}
`;

export const ANIMAL_DELETE_MUTATION = gql`
  mutation deleteAnimal($_id: String!) {
    deleteAnimal(_id: $_id) {
      ...animalDetails
    }
  }

  ${ANIMAL_DETAILS_FRAGMENT}
`;
