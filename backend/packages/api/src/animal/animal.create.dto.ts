import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { MinLength, MaxLength } from 'class-validator';

import { Classification, Nutrition } from '../types/Animals';

registerEnumType(Classification, {
  name: 'Classification',
});

registerEnumType(Nutrition, {
  name: 'Nutrition',
});

@InputType()
export class CreateAnimalInput {
  @MinLength(2)
  @MaxLength(64)
  @Field()
  name: string;

  @Field((type) => Classification)
  classification: Classification;

  @Field((type) => Nutrition)
  nutrition: Nutrition;

  @Field()
  extinct: boolean;
}
