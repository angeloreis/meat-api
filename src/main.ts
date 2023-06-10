import { NestFactory } from '@nestjs/core';
import { AppModule } from './Modules/app.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
