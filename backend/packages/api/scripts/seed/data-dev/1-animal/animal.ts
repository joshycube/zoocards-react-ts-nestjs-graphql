import { Animal } from '../../../../src/animal/animal.entity';

const animal: Partial<Animal>[] = [
  {
    name: 'Lion',
    nutrition: 'Carnivore',
    classification: 'Mammal',
    extinct: false,
  },
  {
    name: 'Lamb',
    nutrition: 'Herbivore',
    classification: 'Mammal',
    extinct: false,
  },
  {
    name: 'Galapagos Damsel',
    nutrition: 'Herbivore',
    classification: 'Fish',
    extinct: true,
  },
];

export = animal;
