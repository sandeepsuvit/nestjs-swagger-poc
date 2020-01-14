import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration for swagger
  swaggerConfig(app);

  await app.listen(3000);
}
bootstrap();
