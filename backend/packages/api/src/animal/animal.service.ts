import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Animal } from './animal.entity';
import { CreateAnimalInput } from './animal.create.dto';
import { UpdateAnimalInput } from './animal.update.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  async getAnimals(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  async getAnimal(name: string): Promise<Animal> {
    return this.animalRepository.findOne({ name });
  }

  async createAnimal(createAnimalInput: CreateAnimalInput): Promise<Animal> {
    return this.animalRepository.save(
      this.animalRepository.create({
        ...createAnimalInput,
      }),
    );
  }

  async updateAnimal(updateAnimalInput: UpdateAnimalInput): Promise<Animal> {
    const item = await this.animalRepository.findOne(updateAnimalInput._id);
    if (!item) {
      throw new Error('Item not found!');
    }
    const newItem = Object.assign(item, updateAnimalInput);

    const _id = updateAnimalInput._id;
    delete updateAnimalInput._id;

    await this.animalRepository.update(_id, updateAnimalInput);

    return newItem;
  }

  async deleteAnimal(_id: string): Promise<Animal> {
    const item = await this.animalRepository.findOne(_id);
    if (!item) {
      throw new Error('Item not found!');
    }
    const result = await this.animalRepository.remove(item);
    return result;
  }
}
