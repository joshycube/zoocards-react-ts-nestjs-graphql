import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Animal')
export class AnimalType {
  @Field((type) => ID, { nullable: true })
  _id: string;

  @Field()
  name: string;

  @Field()
  nutrition: string;

  @Field()
  classification: string;

  @Field()
  extinct: boolean;
}
