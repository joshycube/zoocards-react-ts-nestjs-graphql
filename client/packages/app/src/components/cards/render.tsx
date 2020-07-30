import React from "react";

import { Animal } from "@zoocards/shared/src/v1/types/Animals";
import Card from "@zoocards/shared/src/v1/components/card/cardWrapper";
import CardHeader from "@zoocards/shared/src/v1/components/card/cardHeader";
import CardContent from "@zoocards/shared/src/v1/components/card/cardContent";
import CardActions from "@zoocards/shared/src/v1/components/card/cardActions";
import IconButton from "@zoocards/shared/src/v1/components/buttons/iconButton";
import EditIcon from "@zoocards/shared/src/v1/components/icons/editIcon";
import DeleteIcon from "@zoocards/shared/src/v1/components/icons/deleteIcon";
import Typography from "@zoocards/shared/src/v1/components/typography";

import CardForm from "../cardForm";

import * as Styles from "./styles";

export interface Props {
  animals: Animal[];
  onCancel: () => void;
  handleEdit: (id: string) => void;
  editSubjectId?: string;
  onDelete: (_id: string) => void;
}

export function CardsRender({
  animals,
  handleEdit,
  onCancel,
  editSubjectId,
  onDelete,
}: Props) {
  return (
    <Styles.Wrapper>
      <Styles.CardWrapper>
        <CardForm onCancel={onCancel} mountendForCreate />
      </Styles.CardWrapper>
      {animals.map((animal: Animal) =>
        animal._id === editSubjectId ? (
          <Styles.CardWrapper>
            <CardForm onCancel={onCancel} key={animal._id} animal={animal} />
          </Styles.CardWrapper>
        ) : (
          <Styles.CardWrapper>
            <Card key={animal._id}>
              <CardHeader
                title={animal.name}
                subTitle={animal.extinct.toString()}
              />
              <CardContent>
                <Typography>{animal.nutrition}</Typography>
                <Typography>{animal.classification}</Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => handleEdit(animal._id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(animal._id)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Styles.CardWrapper>
        )
      )}
    </Styles.Wrapper>
  );
}

export default CardsRender;
