import { Entity, Column, ObjectIdColumn } from 'typeorm';

import { Classification, Nutrition } from '../types/Animals';

@Entity()
export class Animal {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Nutrition,
    default: Nutrition.Herbivore,
  })
  nutrition?: string;

  @Column({
    type: 'enum',
    enum: Classification,
    default: Classification.Mammal,
  })
  classification: string;

  @Column({ default: false })
  extinct: boolean;
}
