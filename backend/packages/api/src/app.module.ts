import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AnimalModule } from './animal/animal.module';
import { Animal } from './animal/animal.entity';
import { Settings } from './types/Settings';

export class AppModule {
  static forRoot(settings: Settings): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: settings.MONGO_HOST,
          synchronize: true,
          useUnifiedTopology: true,
          entities: [Animal],
        }),
        GraphQLModule.forRoot({
          autoSchemaFile: true,
        }),
        AnimalModule,
      ],
    };
  }
}
