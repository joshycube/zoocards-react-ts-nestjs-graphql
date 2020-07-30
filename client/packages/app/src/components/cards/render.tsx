import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

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
  intl: any;
}

export function CardsRender({
  animals,
  handleEdit,
  onCancel,
  editSubjectId,
  onDelete,
  intl,
}: Props) {
  const yes = intl.formatMessage({ id: "yes" });
  const no = intl.formatMessage({ id: "no" });
  const extinctLabel = intl.formatMessage({ id: "extinctLabel" });

  return (
    <Styles.Wrapper>
      <Styles.CardWrapper>
        <CardForm
          data-test-id="add-form-card"
          onCancel={onCancel}
          mountendForCreate
        />
      </Styles.CardWrapper>
      {animals.map((animal: Animal) =>
        animal._id === editSubjectId ? (
          <Styles.CardWrapper>
            <CardForm
              data-test-id="edit-form-card"
              onCancel={onCancel}
              key={animal._id}
              animal={animal}
            />
          </Styles.CardWrapper>
        ) : (
          <Styles.CardWrapper key={animal._id} data-test-id="item-card">
            <Card>
              <CardHeader
                title={animal.name}
                subTitle={
                  animal.extinct
                    ? `${extinctLabel}: ${yes}`
                    : `${extinctLabel}: ${no}`
                }
              />
              <CardContent>
                <Typography variant="caption">
                  <FormattedMessage id="nutritionHelper" />
                </Typography>
                <Typography>{animal.nutrition}</Typography>
                <Typography variant="caption">
                  <FormattedMessage id="classificationHelper" />
                </Typography>
                <Typography>{animal.classification}</Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  testid="btn-edit"
                  onClick={() => handleEdit(animal._id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  testid="btn-delete"
                  onClick={() => onDelete(animal._id)}
                >
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

export default injectIntl(CardsRender);
