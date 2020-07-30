import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

import { AppModule } from './app.module';
import { Settings } from './types/Settings';

async function bootstrap() {
  dotenv.config();

  const settings: Settings = dotenv.parse(
    fs.readFileSync(`${process.env.NODE_ENV}.env`),
  );

  const app = await NestFactory.create(AppModule.forRoot(settings));
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
