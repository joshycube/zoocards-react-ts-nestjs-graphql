export type Classifictation = "Mammal" | "Reptile" | "Fish" | "Amphibious";

export type Nutrition = "Carnivore" | "Herbivore";

export interface Animal {
  _id: string;
  name: string;
  extinct: boolean;
  classification: Classifictation;
  nutrition: Nutrition;
}

export type AnimalActionType =
  | "NAME_CHANGE"
  | "NUTRITION_CHANGE"
  | "CLASSIFICATION_CHANGE"
  | "EXTINCT_CHANGE";

export interface AnimalAction {
  type: AnimalActionType;
  payload: any;
}

export type DispatchAnimal = (action: AnimalAction) => void;
