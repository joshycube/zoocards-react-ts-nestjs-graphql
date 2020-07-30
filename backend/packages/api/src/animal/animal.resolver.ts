import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { AnimalType } from './animal.type';
import { AnimalService } from './animal.service';
import { CreateAnimalInput } from './animal.create.dto';
import { UpdateAnimalInput } from './animal.update.dto';

@Resolver((of) => AnimalType)
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Mutation((returns) => AnimalType)
  createAnimal(
    @Args('createAnimalInput') createAnimalInput: CreateAnimalInput,
  ) {
    return this.animalService.createAnimal(createAnimalInput);
  }

  @Mutation((returns) => AnimalType)
  updateAnimal(
    @Args('updateAnimalInput') updateAnimalInput: UpdateAnimalInput,
  ) {
    return this.animalService.updateAnimal(updateAnimalInput);
  }

  @Mutation((returns) => AnimalType)
  deleteAnimal(@Args('_id') _id: string) {
    return this.animalService.deleteAnimal(_id);
  }

  @Query((returns) => AnimalType)
  animal(@Args('name') name: string) {
    return this.animalService.getAnimal(name);
  }

  @Query((returns) => [AnimalType])
  animals() {
    return this.animalService.getAnimals();
  }
}
