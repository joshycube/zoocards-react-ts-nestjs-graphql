import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

import {
  Animal,
  DispatchAnimal,
  AnimalActionType,
} from "@zoocards/shared/src/v1/types/Animals";
import { Error, ACTIONS } from "./component";
import Card from "@zoocards/shared/src/v1/components/card/cardWrapper";
import CardHeader from "@zoocards/shared/src/v1/components/card/cardHeader";
import CardContent from "@zoocards/shared/src/v1/components/card/cardContent";
import CardActions from "@zoocards/shared/src/v1/components/card/cardActions";
import Typography from "@zoocards/shared/src/v1/components/typography";
import Button from "@zoocards/shared/src/v1/components/buttons/generalButton";
import FormInput from "@zoocards/shared/src/v1/components/formInput";
import SelectInput from "@zoocards/shared/src/v1/components/selectInput";
import CheckboxInput from "@zoocards/shared/src/v1/components/checkboxInput";

import { NUTRITION, CLASSIFICATION } from "../../constants";

import * as Styles from "./styles";

interface Props {
  onCancel: () => void;
  setAnimalState: DispatchAnimal;
  animalState: Animal & { errors?: Error[] };
  isErrorSet: (
    state: Animal & { errors?: Error[] },
    fieldName: string
  ) => boolean;
  findErrorMsg: (
    state: Animal & { errors?: Error[] },
    fieldName: string
  ) => string;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  mountedForCreate?: boolean;
  intl: any;
}

function CardForm({
  setAnimalState,
  animalState,
  onCancel,
  findErrorMsg,
  isErrorSet,
  onSubmit,
  mountedForCreate = false,
  intl,
}: Props) {
  const addNew = intl.formatMessage({ id: "addnew" });
  const edit = intl.formatMessage({ id: "edit" });
  const namePlaceholder = intl.formatMessage({ id: "namePlaceholder" });
  const nameHelper = intl.formatMessage({ id: "nameHelper" });
  const nutritionHelper = intl.formatMessage({ id: "nutritionHelper" });
  const classificationHelper = intl.formatMessage({
    id: "classificationHelper",
  });
  const extinctLabel = intl.formatMessage({ id: "extinctLabel" });

  const canSubmit =
    animalState.errors && !animalState.errors.length && animalState.name !== "";

  return (
    <Styles.Wrapper>
      <form>
        <Card>
          <CardHeader title={mountedForCreate ? addNew : edit} />
          <CardContent>
            <Styles.Field>
              <FormInput
                required
                error={isErrorSet(animalState, "name")}
                placeholder={namePlaceholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAnimalState({
                    type: ACTIONS.nameChange as AnimalActionType,
                    payload: e.target.value,
                  })
                }
                helperText={
                  isErrorSet(animalState, "name")
                    ? intl.formatMessage({
                        id: findErrorMsg(animalState, "name"),
                      })
                    : nameHelper
                }
                value={animalState.name}
              />
            </Styles.Field>
            <Styles.Field>
              <SelectInput
                required
                name="nutrition"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAnimalState({
                    type: ACTIONS.nutritionChange as AnimalActionType,
                    payload: e.target.value,
                  })
                }
                helperText={nutritionHelper}
                options={NUTRITION}
                value={animalState.nutrition}
              />
            </Styles.Field>
            <Styles.Field>
              <SelectInput
                required
                name="classification"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAnimalState({
                    type: ACTIONS.classificationChange as AnimalActionType,
                    payload: e.target.value,
                  })
                }
                helperText={classificationHelper}
                options={CLASSIFICATION}
                value={animalState.classification}
              />
            </Styles.Field>
            <Styles.Field>
              <CheckboxInput
                label={extinctLabel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAnimalState({
                    type: ACTIONS.extinctChange as AnimalActionType,
                    payload: e.target.value,
                  })
                }
                checked={animalState.extinct}
                value={animalState.extinct}
              />
            </Styles.Field>
          </CardContent>
          <CardActions>
            <Button
              disabled={!canSubmit}
              variant="contained"
              color="secondary"
              onClick={onSubmit}
            >
              <Typography>
                <FormattedMessage id="save" />
              </Typography>
            </Button>
            <Button variant="contained" color="secondary" onClick={onCancel}>
              <Typography>
                <FormattedMessage id="cancel" />
              </Typography>
            </Button>
          </CardActions>
        </Card>
      </form>
    </Styles.Wrapper>
  );
}

export default injectIntl(CardForm);
