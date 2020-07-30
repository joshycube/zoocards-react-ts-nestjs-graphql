import React from "react";
import { useMutation } from "@apollo/client";

import { Animal } from "@zoocards/shared/src/v1/types/Animals";
import { ANIMAL_QUERY } from "../../graphql/queries/animal";
import {
  ANIMAL_UPDATE_MUTATION,
  ANIMAL_CREATE_MUTATION,
} from "../../graphql/mutations/animal";
import CardFormComponent from "./component";

interface Props {
  animal?: Animal;
  onCancel: () => void;
  mountendForCreate?: boolean;
}

function CardForm({ animal, onCancel, mountendForCreate = false }: Props) {
  const [updateAnimalCardMutation] = useMutation(ANIMAL_UPDATE_MUTATION);
  const [createAnimalCardMutation] = useMutation(ANIMAL_CREATE_MUTATION, {
    refetchQueries: [{ query: ANIMAL_QUERY }],
  });

  const updateAnimalCard = async (updateAnimalInput: Animal) => {
    const payload = {
      variables: {
        updateAnimalInput,
      },
    };

    try {
      await updateAnimalCardMutation(payload);
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };

  const createAnimalCard = async (createAnimalInput: Partial<Animal>) => {
    const payload = {
      variables: {
        createAnimalInput,
      },
    };

    try {
      await createAnimalCardMutation(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardFormComponent
      onCancel={onCancel}
      animal={animal}
      mountedForCreate={mountendForCreate}
      updateAnimalCard={updateAnimalCard}
      createAnimalCard={createAnimalCard}
    />
  );
}

export default CardForm;
