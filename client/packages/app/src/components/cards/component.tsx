import React from "react";

import { Animal } from "@zoocards/shared/src/v1/types/Animals";

import CardsRender from "./render";

interface Props {
  animals: Animal[];
  onDelete: (_id: string) => void;
}

export function CardsComponent({ animals, onDelete }: Props) {
  const [editSubjectId, setEditSubjectId] = React.useState<string>("");

  const handleEdit = (id: string): void => {
    setEditSubjectId(id);
  };

  return (
    <CardsRender
      editSubjectId={editSubjectId}
      handleEdit={handleEdit}
      onCancel={() => setEditSubjectId("")}
      onDelete={onDelete}
      animals={animals}
    />
  );
}

export default CardsComponent;
