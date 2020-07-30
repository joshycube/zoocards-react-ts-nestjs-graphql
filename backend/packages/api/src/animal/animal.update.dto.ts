import { InputType, Field, registerEnumType, ID } from '@nestjs/graphql';
import { MinLength, MaxLength } from 'class-validator';

import { Classification, Nutrition } from '../types/Animals';

registerEnumType(Classification, {
  name: 'Classification',
});

registerEnumType(Nutrition, {
  name: 'Nutrition',
});

@InputType()
export class UpdateAnimalInput {
  @Field((type) => ID)
  _id: string;

  @MinLength(2)
  @MaxLength(64)
  @Field({ nullable: true })
  name?: string;

  @Field((type) => Classification)
  classification?: Classification;

  @Field((type) => Nutrition)
  nutrition?: Nutrition;

  @Field({ nullable: true })
  extinct?: boolean;
}
