import React from "react";

import {
  Animal,
  Nutrition,
  Classifictation,
  AnimalAction,
  AnimalActionType,
} from "@zoocards/shared/src/v1/types/Animals";
import CardFormRender from "./render";

import { NUTRITION, CLASSIFICATION } from "../../constants";

interface Props {
  animal?: Animal;
  mountedForCreate?: boolean;
  onCancel: () => void;
  updateAnimalCard: (input: Animal) => void;
  createAnimalCard: (input: Partial<Animal>) => void;
}

export interface Error {
  [k: string]: string;
}

export const ACTIONS = {
  nameChange: "NAME_CHANGE",
  nutritionChange: "NUTRITION_CHANGE",
  extinctChange: "EXTINCT_CHANGE",
  classificationChange: "CLASSIFICATION_CHANGE",
  clearForm: "CLEAR_FORM",
};

const defaultState = {
  _id: "",
  name: "",
  nutrition: NUTRITION.HERBIVORE as Nutrition,
  classification: CLASSIFICATION.MAMMAL as Classifictation,
  extinct: false,
  errors: [],
};

const clearError = (state: Animal & { errors?: Error[] }, fieldName: string) =>
  (state.errors &&
    state.errors.filter((error: Error) => error.field !== fieldName, [])) ||
  [];

const isErrorSet = (
  animalState: Animal & { errors?: Error[] },
  fieldName: string
): boolean =>
  (animalState.errors &&
    animalState.errors.some((error: Error) => error.field === fieldName)) ||
  false;

const findErrorMsg = (
  animalState: Animal & { errors?: Error[] },
  fieldName: string
): string => {
  const errorObj =
    animalState.errors &&
    animalState.errors.filter((error: Error) => error.field === fieldName);
  return (errorObj && errorObj[0].msg) || "";
};

function formReducer(
  state: Animal & { errors?: Error[] },
  action: AnimalAction
): Animal & { errors?: Error[] } {
  let errors: Error[] = state.errors || [];
  switch (action.type) {
    case ACTIONS.nameChange:
      if (action.payload.length < 2 || action.payload.length > 64) {
        errors = [
          ...errors,
          {
            field: "name",
            msg: "nameError",
          },
        ];
      } else {
        errors = clearError(state, "name");
      }
      return { ...state, name: action.payload, errors };
    case ACTIONS.nutritionChange:
      return { ...state, nutrition: action.payload as Nutrition, errors };
    case ACTIONS.classificationChange:
      return {
        ...state,
        classification: action.payload as Classifictation,
        errors,
      };
    case ACTIONS.extinctChange:
      return { ...state, extinct: !state.extinct, errors };
    case ACTIONS.clearForm:
      return { ...defaultState };
    default:
      return state;
  }
}

function CardFormComponent({
  animal,
  onCancel,
  updateAnimalCard,
  createAnimalCard,
  mountedForCreate,
}: Props) {
  const initialState: Animal & { errors?: Error[] } = animal || defaultState;

  const [state, dispatch] = React.useReducer(formReducer, initialState);

  const onSubmit = () => {
    if (state.errors && !!state.errors.length) {
      return false;
    }

    try {
      mountedForCreate
        ? createAnimalCard({
            name: state.name,
            nutrition: state.nutrition,
            classification: state.classification,
            extinct: state.extinct,
          })
        : updateAnimalCard({
            _id: state._id,
            name: state.name,
            nutrition: state.nutrition,
            classification: state.classification,
            extinct: state.extinct,
          });
    } finally {
      dispatch({ type: ACTIONS.clearForm as AnimalActionType, payload: "" });
    }
  };

  return (
    <CardFormRender
      animalState={state}
      setAnimalState={dispatch}
      onCancel={
        mountedForCreate
          ? () =>
              dispatch({
                type: ACTIONS.clearForm as AnimalActionType,
                payload: "",
              })
          : onCancel
      }
      findErrorMsg={findErrorMsg}
      isErrorSet={isErrorSet}
      onSubmit={onSubmit}
      mountedForCreate={mountedForCreate}
    />
  );
}

export default CardFormComponent;
