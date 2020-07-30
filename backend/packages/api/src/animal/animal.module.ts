import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimalResolver } from './animal.resolver';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  providers: [AnimalResolver, AnimalService],
  exports: [AnimalService],
})
export class AnimalModule {}
