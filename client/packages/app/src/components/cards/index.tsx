import React from "react";
import { useQuery, useMutation } from "@apollo/client";

import Loader from "@zoocards/shared/src/v1/components/loader";
import Error from "@zoocards/shared/src/v1/components/error";

import { ANIMAL_QUERY } from "../../graphql/queries/animal";
import { ANIMAL_DELETE_MUTATION } from "../../graphql/mutations/animal";

import CardsComponent from "./component";

export function Cards() {
  const { loading, error, data, refetch } = useQuery(ANIMAL_QUERY);

  const [deleteAnimalCardMutation] = useMutation(ANIMAL_DELETE_MUTATION, {
    refetchQueries: [{ query: ANIMAL_QUERY }],
  });

  const deleteAnimalCard = async (_id: string) => {
    const payload = {
      variables: {
        _id,
      },
    };

    try {
      await deleteAnimalCardMutation(payload);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <CardsComponent animals={data.animals} onDelete={deleteAnimalCard} />;
}

export default Cards;
