import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './common/base/swagger.set-up';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await setupSwagger(app)
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server running at http://localhost:${process.env.PORT}/api_computer_swagger PORT`)
}
bootstrap();
